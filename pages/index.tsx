import { SplatScreen } from '../common/components/screen';
import { splatScreenProps } from '../common/components/screen/SplatScreen.mock';

export default function Home() {
  return (
    <div>
      <SplatScreen {...splatScreenProps} />
    </div>
  );
}
