import Card from './card';
import { Tag } from './Tags';
// Method 1: import { parseISO, format } from 'date-fns';
// Method 2 ///////////////
import Date from './date';
//////////////////////////
type CardListProps = {
  slug: string;
  link: string;
  date: string;
  title?: string;
  key: string;
  abstract?: string;
  imgUrl?: string;
};

export default function CardList({ data }: { data: Array<CardListProps> }) {
  console.log({ data });

  return (
    <div className="border-green-700 border-solid border-spacing-4 border-2">
      <Tag twClass="bg-green-200">React Server component: Card List</Tag>
      <div className={`dark:text-white px-2 lg:px-6`}>
        <ul
          className={
            'list-none p-0 m-0 dark:text-white grid grid-cols-2 w-full xl:flex-row -mx-1 xl:-mx-4 h-1/3'
          }
        >
          {data.map((props: CardListProps) => {
            /* Method 1: const formattedDate = format(parseISO(props.date), 'LLLL dd, yyyy');
            return (
              <Card
                {...props}
                key={props.slug}
                link={`blog/${props.slug}`}
                formattedDate={formattedDate}
              />
            );
            */

            <Card {...props} key={props.slug} link={`blog/${props.slug}`} >
              {/*Method 2: Passing the Date Component as prop */}
              <Date value = {props.date} />
            </Card>;
          })}

        </ul>
      </div>
    </div>
  );
}
