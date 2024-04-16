import { ComponentProps } from "react";
import { notificationImages } from "../../data";
import { notification1 } from "../../assets";

interface NotificationProps extends ComponentProps<"div"> {
  title?: string;
  className?: string;
}

const Notification = ({ title, className, ...props }: NotificationProps) => {
  return (
    <div
      {...props}
      className={`${className || ""} flex items-center gap-5 rounded-2xl border border-n-1/10 bg-n-9/40 p-4 pr-6 backdrop-blur`}
    >
      <img
        src={notification1}
        width={62}
        height={62}
        alt={notification1}
        className="rounded-xl"
      />
      <div className="flex-1">
        <h6 className="mb-1 text-base font-semibold">{title}</h6>
        <div className="flex items-center justify-between">
          <ul className="-m-0.5 flex">
            {notificationImages.map((image, index) => (
              <li
                key={index}
                className="flex size-6 overflow-hidden rounded-full border-2 border-n-12 bg-n-9/90"
              >
                <img
                  src={image}
                  alt={image}
                  width={20}
                  height={20}
                  className="w-hull"
                />
              </li>
            ))}
          </ul>
          <div className="body-2 text-n-13">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
