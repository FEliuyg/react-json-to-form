import { Tooltip } from '@easyv/react-components';
import { QuestionCircleOutlined } from '@easyv/react-icons';

export default function Tip({ tip }: { tip?: string }) {
  if (tip) {
    return (
      <Tooltip content={tip}>
        <QuestionCircleOutlined />
      </Tooltip>
    );
  } else {
    return null;
  }
}
