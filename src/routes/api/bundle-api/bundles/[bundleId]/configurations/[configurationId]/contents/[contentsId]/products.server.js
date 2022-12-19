export async function api(request, {params, session}) {
  const {bundleId, configurationId, contentId} = params;

  if (session) {
    return new Response(JSON.stringify({msg: bundleId}));
  }

  return new Response('Error');
}
