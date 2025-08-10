import { withErrorHandling } from '@/common/hocs';
import HomePage from '@/modules/Home/page';
import type { Metadata } from 'next';



export const metadata: Metadata = {
  title: 'Nova-X',
  description: 'Wellcome to Nova-X, the next generation communication platform.',
};



function Home() {
  return (
      <HomePage />
  );
}

export default withErrorHandling(Home, []);