import { getCurrentWindow } from "@tauri-apps/api/window";
import { Maximize, Minus, X } from "lucide-react";
import type { ComponentProps, FC, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

const appWindow = getCurrentWindow();

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
		<div data-tauri-drag-region className="col-span-3 flex justify-end items-center">
			<ActionButton onClick={() => appWindow.minimize()}>
				<Minus size={16} strokeWidth={2} />
			</ActionButton>
			<ActionButton onClick={() => appWindow.toggleMaximize()}>
				<Maximize size={16} strokeWidth={2} />
			</ActionButton>
			<ActionButton
				onClick={() => appWindow.close()}
				className="active:bg-destructive-foreground! hover:bg-destructive!"
			>
				<X size={16} strokeWidth={2} />
			</ActionButton>
		</div>
	);
};
