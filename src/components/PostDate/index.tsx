import { formatDatetime, formatDistancetoNow } from "@/utils/format-date";

type PostDateProps = {
  dateTime: string;
};

export function PostDate({ dateTime }: PostDateProps) {
  return (
    <time
      className="text-slate-600 text-sm/tight"
      dateTime={dateTime}
      title={formatDistancetoNow(dateTime)}
    >
      {formatDatetime(dateTime)}
    </time>
  );
}
