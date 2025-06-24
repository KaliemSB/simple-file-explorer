import { Download, HardDrive, House, Usb } from "lucide-react";
import type { FC, PropsWithChildren, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const fast_access = [
	{
		label: "Home",
		icon: <House />,
	},
	{
		label: "Downloads",
		icon: <Download />,
	},
] satisfies Array<{
	label: string;
	icon: ReactNode;
}>;

const internal_storage = ["KINGSTON SNVS500G", "SAMSUNG 970 EVO Plus 1TB", "CRUCIAL MX500 1TB"];

const external_media = ["SanDisk Cruzer Blade 16GB", "KINGSTON SE9 G2 128GB", "PNY Attache 4 USB 3.0 64GB"];

const SidebarButton: FC<PropsWithChildren & { icon: ReactNode }> = ({ children, icon }) => {
	return (
		<Button className="w-full justify-start!" size="sm" variant="outline">
			{icon}
			<p className="truncate">{children}</p>
		</Button>
	);
};

const SidebarGroup: FC<PropsWithChildren & { label: string }> = ({ children, label }) => {
	return (
		<>
			<p className="text-xs font-medium">{label}</p>
			{children}
		</>
	);
};

export const AppSidebar: FC = () => {
	return (
		<div>
			<ScrollArea className="h-[calc(100dvh-32px-1px)]">
				<div className="flex flex-col p-2 gap-2">
					<SidebarGroup label="Fast Access">
						{fast_access.map((item) => (
							<SidebarButton icon={item.icon} key={item.label}>
								{item.label}
							</SidebarButton>
						))}
					</SidebarGroup>
					<SidebarGroup label="Internal Storage">
						{internal_storage.map((item) => (
							<SidebarButton icon={<HardDrive />} key={item}>
								{item}
							</SidebarButton>
						))}
					</SidebarGroup>
					<SidebarGroup label="External Media">
						{external_media.map((item) => (
							<SidebarButton icon={<Usb />} key={item}>
								{item}
							</SidebarButton>
						))}
					</SidebarGroup>
				</div>
			</ScrollArea>
		</div>
	);
};
