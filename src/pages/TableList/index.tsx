import { PageContainer } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';

const TableList: React.FC = () => {
  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const intl = useIntl();
  return (
    <PageContainer>
      {intl.formatMessage({
        id: 'pages.searchTable.title',
        defaultMessage: 'Enquiry form',
      })}
    </PageContainer>
  );
};

export default TableList;
