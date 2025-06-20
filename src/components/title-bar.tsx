import { Maximize, Minus, X } from "lucide-react";
import type { ComponentProps, FC, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

const ActionButton: FC<PropsWithChildren<ComponentProps<"button">>> = ({ children, className, ...props }) => {
	return (
		<button
			{...props}
			type="button"
			className={cn(
				className,
				"active:bg-foreground/15 hover:bg-foreground/5 transition-all duration-150 cursor-pointer size-8 [&_svg]:text-foreground grid place-content-center",
			)}
		>
			{children}
		</button>
	);
};

export const TitleBar: FC = () => {
	return (
		<div className="col-span-2 bg-background flex justify-end items-center">
			<ActionButton>
				<Minus size={16} strokeWidth={2} />
			</ActionButton>
			<ActionButton>
				<Maximize size={16} strokeWidth={2} />
			</ActionButton>
			<ActionButton className="active:bg-destructive-foreground! hover:bg-destructive!">
				<X size={16} strokeWidth={2} />
			</ActionButton>
		</div>
	);
};
