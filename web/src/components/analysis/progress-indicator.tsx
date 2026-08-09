export type ProgressIndicatorProps = {
  current: number;
  total?: number;
  percentage?: number;
};

export function ProgressIndicator({
  current,
  total,
  percentage,
}: ProgressIndicatorProps) {
  return (
    <div aria-label="Andamento da jornada">
      <p className="text-sm font-bold text-muted">
        Etapa {current}
        {total === undefined ? "" : ` de ${total}`}
      </p>
      {percentage === undefined ? (
        <p className="mt-2 text-sm text-muted">
          O andamento percentual não foi informado.
        </p>
      ) : (
        <div
          role="progressbar"
          aria-label="Progresso"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percentage}
          className="mt-3 h-2 overflow-hidden rounded-full bg-surface-soft"
        >
          <span
            className="block h-full rounded-full bg-accent"
            style={{ width: `${percentage}%` }}
          />
        </div>
      )}
    </div>
  );
}
