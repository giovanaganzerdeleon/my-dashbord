import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Menu from './components/Menu.jsx';
import SummaryCard from './components/SummaryCard.jsx';
import Panel from './components/Painel.jsx';
import InfoRow from './components/InfoRow.jsx';
import StatusBadge from './components/StatusBadge.jsx';

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
            <SummaryCard title="Jogos" value={42} icon="🎮" />
            <SummaryCard title="Conquistas" value={318} icon="🏆" />
            <SummaryCard
              title="Completados"
              value={17}
              icon="☑️"
              isHighlighted
            />
            <SummaryCard title="Nota média" value="8,6" icon="" />
          </div>
        </Panel>

        <Panel
          id="highlight"
          title="Mais jogado do Mês"
          className="md:col-span-2"
        >
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-heading text-xl font-bold">AION2</h3>
            <StatusBadge label ="Multiplayer" isActive />
            <StatusBadge label ="RPG Massivo" />
          </div>
          <p className="mt-1 text-muted">360 horas nas duas ultimas semanas</p>
          <div className="mt-4 grid gap-x-6 md:grid-cols-2">
            <InfoRow label="Plataforma" value="PC" />
            <InfoRow label="Gênero" value="RPG" />
            <InfoRow label="Horas totais" value="500 hrs" />
            <InfoRow label="Conquistas" value="-" />
          </div>
        </Panel>

        <Panel id="list" title="Lista" className="xl:min-h-80">
          <p className="text-muted">Em construção.</p>
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
