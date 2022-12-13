export async function api(request, {params, session}) {
  const {subscriptionId, subscriptionContentId} = params;

  if (session) {
    console.log('subscriptionId');
    console.log(subscriptionId);

    return new Response(
      JSON.stringify({
        msg: subscriptionId,
        subscriptionContentId,
      }),
    );
  }

  return new Response('Error');
}
