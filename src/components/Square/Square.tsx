import { SquaresValueProps } from 'App';

type SquareProps = {
  className: string;
  onClick: () => void;
  value: SquaresValueProps;
  disabled: boolean;
};

export const Square = ({ className, onClick, value, disabled }: SquareProps) => {
  return (
    <button
      className={`flex items-center border border-zinc-100 justify-center h-32 w-32 ${disabled ? 'cursor-not-allowed' : 'hover:bg-zinc-50 active:scale-90 active:shadow-2xl transition-all'} rounded-xl ${className}`}
      onClick={onClick}
    >
      {value === 'X' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-14 h-14 fill-sky-600"
        >
          <path d="M393.4 41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L269.3 256 438.6 425.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 301.3 54.6 470.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0L224 210.7 393.4 41.4z" />
        </svg>
      ) : value === 'O' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-14 h-14 fill-cyan-500"
        >
          <path d="M224 96C135.6 96 64 167.6 64 256s71.6 160 160 160s160-71.6 160-160s-71.6-160-160-160zM0 256C0 132.3 100.3 32 224 32s224 100.3 224 224s-100.3 224-224 224S0 379.7 0 256z" />
        </svg>
      ) : null}
    </button>
  );
};
