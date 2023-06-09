import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { StarIcon, HeartIcon } from "@heroicons/react/24/solid";

export default function Example(props) {
  return (
    <div>
      <Card className="flex justify-center max-w-[26rem] shadow-lg mx-auto  px-auto py-3">
        <CardHeader floated={false} color="blue-gray">
          <img src={props.e.image} alt="ui/ux review check" />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          <IconButton
            size="sm"
            color="red"
            variant="text"
            className="!absolute top-4 right-4 rounded-full"
          >
            <HeartIcon className="h-6 w-6" />
          </IconButton>
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-medium">
              {props.e.title}
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
              {props.e.rating}
            </Typography>
          </div>
          <Typography color="gray">{props.e.description}</Typography>
        </CardBody>
        <CardFooter className="pt-3">
          <Button size="lg" fullWidth={true}>
            Reserve
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
