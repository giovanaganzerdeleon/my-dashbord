import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Menu from './components/Menu.jsx';
import SummaryCard from './components/SummaryCard.jsx';
import Panel from './components/Painel.jsx';
import InfoRow from './components/InfoRow.jsx';
import StatusBadge from './components/StatusBadge.jsx';
import DetailsToggle from './components/DetailsToggle.jsx';

const summaryCards = [
  { id: 'games', title: 'Jogos', value: 42, icon: '🎮' },
  { id: 'hours', title: 'Conquistas', value: 318, icon: '🏆' },
  {
    id: 'completed',
    title: 'Completados',
    value: 17,
    icon: '☑️',
    isHighlighted: true,
  },
  { id: 'rating', title: 'Nota média', value: '8,6' },
];

const games = [
  { id: 'bg3', title: 'Baldurs Gate 3', hours: 234, isCompleted: false },
  { id: 'stardew-valley', title: 'Stardew Valley', hours: 217, isCompleted: false },
  { id: 'Lop', title: 'Lies Of P', hours: 98, isCompleted: true },
  { id: 'BioShock', title: 'BioShock Infinite', hours: 64, isCompleted: false },
  { id: 'Sonic', title: 'Sonic Unleshead', hours: 45, isCompleted: true },
  { id: 'Lis', title: 'Life Is Strange', hours: 16, isCompleted: true },
];

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main
        className="grid flex-1 grid-cols-1 content-start gap-4 p-4
          md:grid-cols-2 md:gap-6 md:p-6
          xl:grid-cols-[15rem_1fr_1fr] xl:p-8"
      >
        <Menu />
        <Panel id="summary" title="Resumo" className="md:col-span-2">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {summaryCards.map((card) => (
              <SummaryCard
                key={card.id}
                title={card.title}
                value={card.value}
                icon={card.icon}
                isHighlighted={card.isHighlighted}
              />
            ))}
          </div>
        </Panel>

        <Panel
          id="highlight"
          title="Mais jogado do Mês"
          className="md:col-span-2"
        >
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-heading text-xl font-bold">AION2</h3>
            <StatusBadge label="Multiplayer" isActive />
            <StatusBadge label="Novo:2026" isActive />
            <StatusBadge label="RPG Massivo" />
          </div>
          <p className="mt-1 text-muted">360 horas nas duas ultimas semanas</p>
          <div className="mt-4 grid gap-x-6 md:grid-cols-2">
            <InfoRow label="Plataforma" value="PC" />
            <InfoRow label="Gênero" value="RPG" />
            <InfoRow label="Ano de lançamento" value="2026" />
            <InfoRow label="Conquistas" value="-" />
            <DetailsToggle>
              <p>Horas Totais : 500 horas</p>
            </DetailsToggle>
          </div>
        </Panel>

        <Panel id="list" title="Outros Jogos" className="xl:min-h-80">
          <ul>
            {games.map((game) => (
              <li
                key={game.id}
                className="flex flex-wrap items-center justify-between gap-2
          border-b border-border py-3"
              >
                <div>
                  <p className="font-bold">{game.title}</p>
                  <p className="text-sm text-muted">{game.hours} h jogadas</p>
                </div>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel id="chart" title="Gráfico" className="xl:min-h-80">
          <p className="text-muted">Em construção.</p>
        </Panel>
      </main>
      <Footer />
    </div>
  );
}

export default App;
