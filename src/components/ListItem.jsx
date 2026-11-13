import StatusBadge from './StatusBadge.jsx';

function ListItem({ title, conquistas, isCompleted =false }) {
  return (
    <li
      className="flex flex-wrap items-center justify-between gap-2
        border-b border-border py-3"
    >
      <div>
        <p className="font-bold">
          {isCompleted && <span aria-hidden="true">🏆</span>}
          {title}
        </p>

        <p className="text-sm text-muted">
          {conquistas}  {isCompleted ? 'Completo' : 'conquistas até agora'}
        </p>
      </div>
      <StatusBadge
        label={isCompleted ? 'Platinado' : 'não platinado'}
        isActive={!isCompleted}
      />
    </li>
  );
}

export default ListItem;
