import { Grid } from '@nextui-org/react';
import ComparisonCard from '../components/ComparisonCard';
import { useLiveQuery } from 'dexie-react-hooks';
import { db as database } from '../context/db';

export default function Dashboard() {
  const savedComparsions = useLiveQuery(() => database.comparisons.toArray());

  return (
    <Grid.Container
      gap={1}
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 50,
      }}
    >
      <Grid>
        <ComparisonCard metadata={{ title: 'Configs Compare', id: null }} />
      </Grid>
      <Grid>
        <ComparisonCard />
      </Grid>
      {savedComparsions?.map((item) => {
        return (
          <Grid key={item.id}>
            <ComparisonCard
              metadata={{ id: item.id as number, title: item.data.title }}
            />
          </Grid>
        );
      })}
    </Grid.Container>
  );
}
