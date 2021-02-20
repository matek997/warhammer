import * as signalR from "@microsoft/signalr";
import { Api } from "../Api";


type MessageCallback = ((msg: string) => void);
export class ChatConnection {

	private readonly NAME_FEED = 'broadcastMessage';
	private readonly ECHO = 'echo';
	private connection;
	private started = false;
	public onMessage?: MessageCallback;
	public onEcho?: MessageCallback;
	public onClose?: () => void;
	constructor(protected api: Api) {
		this.connection = new signalR.HubConnectionBuilder()
			.withUrl(this.api.getConfig() + "/chat")
			.build();
		this.connection.on(this.NAME_FEED, (msg: any) => this.onMessage && this.onMessage(msg));
		this.connection.on(this.ECHO, (msg: any) => this.onEcho && this.onEcho(msg));
		this.connection.onclose(() => this.onClose && this.onClose());
	}

	async start() {
		if (!this.started) {
			await this.connection.start();
		}

		this.started = true;
	}

	async send(msg: string) {
		return this.connection.send(this.NAME_FEED, msg);
	}

	async echo(msg: string) {
		return this.connection.send(this.ECHO, msg);
	}

}