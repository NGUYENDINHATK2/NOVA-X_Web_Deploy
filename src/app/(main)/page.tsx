import { withErrorHandling } from '@/common/hocs';
import HomePage from '@/modules/Home/page';


function Home() {
  return (
      <HomePage />
  );
}

export default withErrorHandling(Home, []);