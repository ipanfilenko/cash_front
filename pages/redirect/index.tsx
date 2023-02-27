import { useRouter } from "next/router";

const urlPattern = new RegExp('(?:https?):\/\/(.)');

function Redirect() {
  const router = useRouter();

  const { url } = router.query;

  if (url && typeof url === 'string' && !!urlPattern.test(url)) {
    router.push(url);

    return null;
  }

  if (url) {
    router.push('/start');
    return null;
  }

  return null;
}

export default Redirect;
