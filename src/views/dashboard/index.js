import { Card, Layout, Page, Tabs } from '@shopify/polaris';
import React, { useCallback, useState } from 'react';
import ColunmChart from './colunmChart';
import LineChart from './lineChart';

const Dashboard = () => {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );

  const tabs = [
    {
      id: 'all-customers-fitted-2',
      content: 'Subcription',
      accessibilityLabel: 'All customers',
      panelID: 'all-customers-fitted-content-2',
      chart: <LineChart />,

    },
    {
      id: 'accepts-marketing-fitted-2',
      content: 'Revenue',
      panelID: 'accepts-marketing-fitted-Ccontent-2',
      chart: <ColunmChart />
    },
  ];

  return (
    <>
      <Page fullWidth title="Dashboard ">
        <Layout>
          <Card class="w-Full" >
            <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted>
              <Card.Section title={tabs[selected].chart}>
              </Card.Section>
            </Tabs>
          </Card>
        </Layout>
      </Page>
    </>
  );
}
export default Dashboard;