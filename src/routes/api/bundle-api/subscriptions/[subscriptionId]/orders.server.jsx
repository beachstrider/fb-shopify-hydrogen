

export async function api(request, {params, session}) {
  const {subscriptionId} = params;

  if (session) {
   
      console.log("subscriptionId");
      console.log(subscriptionId);
      
    return new Response(JSON.stringify({msg: subscriptionId}));
  }

  return new Response('Error');
}
