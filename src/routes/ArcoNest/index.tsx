/* eslint-disable react/no-unknown-property */
import { Helmet } from '@tokopedia/skipper/head';
import { useNavigate } from '@tokopedia/skipper/router';

import type { SkipperComponentType } from '@tokopedia/skipper/router';

import Main from '@/components/Main';

// Component(s)
import { Button, Divider, Typography } from '@nest-ui/core';
import { Pagination, Space, Steps } from '@arco-design/web-react';

// Style(s)
// import '@arco-design/web-react/dist/css/arco.css';
import '@arco-themes/react-nest-arco/css/arco.css';
import '@tokopedia/nest-color/dist/css/nest-color-light.css';
import { ctaButton } from './style';

/**
 * @function ArcoNest
 */
const ArcoNest: SkipperComponentType = () => {
  const navigate = useNavigate();

  const Step = Steps.Step;

  return (
    <Main>
      <Helmet>
        <title>Arco Nest | Skipper Framework</title>
      </Helmet>

      <Space direction="vertical" size="large">
        <Typography as="h1" variant="heading1" style={{ margin: 0 }}>
          Arco & Nest Design System
        </Typography>

        <Typography>This is POC of Arco & Nest Design System on Skipper Framework</Typography>

        <Steps current={2} style={{ maxWidth: 780, margin: '0 auto' }}>
          <Step title="Succeeded" />
          <Step title="Processing" />
          <Step title="Pending" />
        </Steps>

        <Space size="small">
          <Button>Default Variant</Button>
          <Button variant="ghost">Ghost Variant</Button>
          <Button variant="text">Text Variant</Button>
        </Space>

        <Pagination total={100} />

        <Divider />

        <button css={ctaButton} type="button" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </Space>
    </Main>
  );
};

export default ArcoNest;
