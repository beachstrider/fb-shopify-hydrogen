import {request} from '../../utils';
import {setDeliveryDates} from '../../store/slices/rootSlice';

const getContents = async (token, bundleId, configurationId, queryString) => {
  try {
    return await request(
      `${process.env.PROXY_APP_URL}/bundle-api/bundles/${bundleId}/configurations/${configurationId}/contents?${queryString}`,
      {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
  } catch (error) {
    return error;
  }
};

const getContent = async (token, bundleId, configurationId, contentId) => {
  try {
    return await request(
      `${process.env.PROXY_APP_URL}/bundle-api/bundles/${bundleId}/configurations/${configurationId}/contents/${contentId}`,
      {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
  } catch (error) {
    return error;
  }
};

const getBundle = async (token, id) => {
  try {
    return await request(
      `${process.env.PROXY_APP_URL}/bundle-api/bundles/${id}`,
      {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
  } catch (error) {
    return error;
  }
};

const getBundleConfiguration = async (token, bundleId, configurationId) => {
  try {
    return await request(
      `${process.env.PROXY_APP_URL}/bundle-api/bundles/${bundleId}/configurations/${configurationId}`,
      {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
  } catch (error) {
    return error;
  }
};

const getBundleByPlatformId = async (token, productPlatformId) => {
  try {
    return await request(
      `${process.env.PROXY_APP_URL}/bundle-api/bundles-query?platform_product_id=${productPlatformId}`,
      {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
  } catch (error) {
    return error;
  }
};

const saveCart = async (
  token,
  platformCustomerId,
  platformCartToken,
  platformVariantId,
  platformProductId,
  bundleId,
  deliveryDay,
  subscriptionType,
  subscriptionSubType,
  items,
) => {
  try {
    return await request(`${process.env.PROXY_APP_URL}/bundle-api/carts`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: {
        platform_customer_id: platformCustomerId,
        platform_cart_token: platformCartToken,
        platform_product_id: platformProductId,
        platform_variant_id: platformVariantId,
        subscription_type: subscriptionType,
        subscription_sub_type: subscriptionSubType,
        bundle_id: bundleId,
        delivery_day: deliveryDay,
        contents: [...items],
      },
    });
  } catch (error) {
    return error;
  }
};

const saveBundle = async (token, id) => {
  try {
    return await request(
      `${process.env.PROXY_APP_URL}/bundle-api/bundles/${id}`,
      {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
  } catch (error) {
    return error;
  }
};

const updateBundle = async (token, id) => {
  try {
    return await request(
      `${process.env.PROXY_APP_URL}/bundle-api/bundles/${id}`,
      {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
  } catch (error) {
    return error;
  }
};

const getActiveSubscriptions = async (token) => {
  try {
    return await request(
      `${process.env.PROXY_APP_URL}/bundle-api/subscriptions?is_active=1`,
      {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
  } catch (error) {
    return error;
  }
};

const getSubscriptionOrders = async (token, orderId) => {
  try {
    return await request(
      `${process.env.PROXY_APP_URL}/bundle-api/subscriptions/${orderId}/orders`,
      {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
  } catch (error) {
    return error;
  }
};

const saveSubscriptionOrder = async (
  token,
  subscriptionId,
  platformOrderId,
  contentId,
  items,
) => {
  try {
    return await request(
      `${process.env.PROXY_APP_URL}/bundle-api/subscriptions/${subscriptionId}/orders`,
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: {
          platform_order_id: platformOrderId,
          bundle_configuration_content_id: contentId,
          items: [...items],
        },
      },
    );
  } catch (error) {
    return error;
  }
};

const updateSubscriptionOrder = async (
  token,
  subscriptionId,
  platformOrderId,
  configurationContentId,
  subscriptionContentId,
  items,
  isEnabled = 1,
) => {
  try {
    return await request(
      `${process.env.PROXY_APP_URL}/bundle-api/subscriptions/${subscriptionId}/orders/${subscriptionContentId}`,
      {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: {
          platform_order_id: platformOrderId,
          bundle_configuration_content_id: configurationContentId,
          is_enabled: isEnabled,
          items,
        },
      },
    );
  } catch (error) {
    return error;
  }
};

const createSubscriptionOrder = async (
  token,
  subscriptionId,
  subscriptionContentId,
  items,
  isEnabled = 1,
) => {
  try {
    return await request(
      `${process.env.PROXY_APP_URL}/bundle-api/subscriptions/${subscriptionId}/orders`,
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: {
          bundle_configuration_content_id: subscriptionContentId,
          is_enabled: isEnabled,
          items,
        },
      },
    );
  } catch (error) {
    return error;
  }
};

const getDefaultProducts = async (
  token,
  bundleId,
  configurationId,
  contentId,
) => {
  try {
    return await request(
      `${process.env.PROXY_APP_URL}/bundle-api/bundles/${bundleId}/configurations/${configurationId}/contents/${contentId}/products?is_default=1`,
      {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
  } catch (error) {
    return error;
  }
};

const generateRequestToken = async (value) => {
  try {
    return await request(`${process.env.PROXY_APP_URL}/request-token`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: {
        value,
      },
    });
  } catch (error) {
    return error;
  }
};

const getDeliveryDates = async (token) => {
  return await request(
    `${process.env.PROXY_APP_URL}/bundle-api/delivery-dates`,
    {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: {},
    },
  );
};

const getBundleConfigurations = async (token, bundleId) => {
  try {
    return await request(
      `${process.env.PROXY_APP_URL}/bundle-api/bundles/${bundleId}/configurations`,
      {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
  } catch (error) {
    return error;
  }
};

const getEnabledBundles = async (token, queryString = 'is_enabled=1') => {
  try {
    return await request(
      `${process.env.PROXY_APP_URL}/bundle-api/bundles-query?${queryString}`,
      {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
  } catch (error) {
    return error;
  }
};

export {
  getContents,
  getBundle,
  getBundleConfiguration,
  getBundleByPlatformId,
  getContent,
  getActiveSubscriptions,
  getSubscriptionOrders,
  saveCart,
  saveBundle,
  updateBundle,
  saveSubscriptionOrder,
  updateSubscriptionOrder,
  createSubscriptionOrder,
  getDefaultProducts,
  generateRequestToken,
  getDeliveryDates,
  getBundleConfigurations,
  getEnabledBundles,
};
