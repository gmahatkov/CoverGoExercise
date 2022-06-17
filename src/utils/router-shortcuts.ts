import { useRouter } from 'vue-router';

export default function useRouterShortcuts(): { [key: string]: () => void } {
  const router = useRouter();

  function goToHome() {
    router.push({ name: 'home' });
  }

  function goToForm() {
    router.push({ name: 'form' });
  }

  function goToSummary() {
    router.push({ name: 'summary' });
  }

  function goToError() {
    router.push({ name: 'error' });
  }

  return {
    goToHome,
    goToForm,
    goToSummary,
    goToError,
  };
}
