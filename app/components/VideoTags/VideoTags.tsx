import Link from "next/link";

interface Props {
  tags: string[];
}

export const VideoTags = ({ tags }: Props) => {
  return (
    <div className="mt-4 px-2">
      {tags.length &&
        tags.map((tag, idx) => (
          <span
            key={`${tag}-${idx}`}
            className="bg-blue-900 mr-4 rounded-lg p-1 cursor-pointer hover:bg-gray-800"
          >
            <Link href={`/tags/${tag}`}>{tag}</Link>
          </span>
        ))}
    </div>
  );
};
