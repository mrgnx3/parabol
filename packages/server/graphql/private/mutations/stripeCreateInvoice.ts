import fetchAllLines from '../../../billing/helpers/fetchAllLines'
import generateInvoice from '../../../billing/helpers/generateInvoice'
import updateSubscriptionQuantity from '../../../billing/helpers/updateSubscriptionQuantity'
import {isSuperUser} from '../../../utils/authorization'
import {getStripeManager} from '../../../utils/stripe'
import {MutationResolvers} from '../resolverTypes'

const stripeCreateInvoice: MutationResolvers['stripeCreateInvoice'] = async (
  _source,
  {invoiceId},
  {authToken, dataLoader}
) => {
  // AUTH
  if (!isSuperUser(authToken)) {
    throw new Error('Don’t be rude.')
  }

  // RESOLUTION
  const manager = getStripeManager()
  const [stripeLineItems, invoice] = await Promise.all([
    fetchAllLines(invoiceId),
    manager.retrieveInvoice(invoiceId)
  ])
  const {
    metadata: {orgId}
  } = await manager.retrieveCustomer(invoice.customer as string)
  if (!orgId) throw new Error(`orgId not found on metadata for invoice ${invoiceId}`)

  await updateSubscriptionQuantity(orgId, dataLoader, true)

  await Promise.all([
    generateInvoice(invoice, stripeLineItems, orgId, invoiceId, dataLoader),
    manager.updateInvoice(invoiceId, orgId)
  ])
  return true
}

export default stripeCreateInvoice
