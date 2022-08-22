import { Button } from '../Button/Button';

interface PeraButtonProps {
  accountAddress: string | null;
  onLogout: () => void;
  onLogin: () => void;
}
export const PeraButton = ({
  accountAddress,
  onLogin,
  onLogout,
}: PeraButtonProps) => {
  return (
    <>
      {accountAddress ? (
        <>
          <Button
            extraClass="pera bg-emerald-900 text-stone-400"
            size="small"
            onClick={onLogout}
            label={accountAddress.substring(0, 18)}
          />
        </>
      ) : (
        <>
          <Button
            backgroundColor="yellow"
            size="small"
            onClick={onLogin}
            label="Connect with Pera"
          />
        </>
      )}
    </>
  );
};
