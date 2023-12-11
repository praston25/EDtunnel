// <!--GAMFC-->version base on commit 43fad05dcdae3b723c53c226f8181fc5bd47223e, time is 2023-06-22 15:20:02 UTC<!--GAMFC-END-->.
// @ts-ignore
import { connect } from 'cloudflare:sockets';

// How to generate your own UUID:
// [Windows] Press "Win + R", input cmd and run:  Powershell -NoExit -Command "[guid]::NewGuid()"
let userID = 'd342d11e-d424-4583-b36e-524ab1f0afa4';

//default
//const proxyIPs = ['cdn-all.xn--b6gac.eu.org', 'cdn.xn--b6gac.eu.org', 'cdn-b100.xn--b6gac.eu.org', 'edgetunnel.anycast.eu.org', 'cdn.anycast.eu.org'];
//(Asia/Jakarta)
const proxyIPs = ['35.219.50.99','35.219.15.90','45.200.9.82','45.195.3.82','45.194.25.18','98.98.119.110','98.98.118.82','163.181.100.110'];
//(Singapore)
//const ProxyIPs = ['3.0.82.111','3.1.243.149','4.193.32.94','8.219.174.142','8.222.214.231','8.219.104.242','8.219.72.51','8.219.196.24','8.222.208.83','8.219.111.175','8.219.206.53','8.219.103.126','8.219.193.97','8.222.236.229','8.219.199.220','8.219.140.229','8.219.164.237','8.222.209.223','8.219.247.203','8.219.235.164','8.219.251.81','8.222.214.13','8.219.190.62','8.219.175.127','8.222.221.90','8.219.97.179','8.219.201.174','8.222.140.87','8.219.6.157','8.219.222.8','8.219.198.139','8.219.245.187','8.222.222.64','8.219.248.57','8.219.51.211','8.219.124.227','8.222.223.34','8.219.248.47','8.219.42.72','8.219.66.156','8.222.210.182','8.219.195.47','8.219.98.13','8.219.101.138','8.219.222.98','8.222.193.65','8.219.137.50','8.219.70.151','8.219.3.53','8.219.126.240','8.219.73.188','8.219.103.65','8.219.126.3','8.219.238.145','8.219.228.157','8.222.144.117','8.219.0.162','8.222.164.209','8.222.212.172','8.219.40.38','8.219.151.193','8.219.144.168','8.222.171.165','8.222.199.55','8.222.137.192','8.219.72.50','8.222.175.6','8.219.99.8','8.219.58.64','8.222.138.164','8.219.141.174','8.219.228.186','8.219.67.133','8.222.181.139','8.219.40.255','8.219.12.152','8.219.237.250','8.219.170.180','8.219.228.193','8.219.4.122','8.219.193.202','8.219.178.101','8.219.102.252','8.219.213.112','8.219.161.129','8.219.179.34','8.222.249.98','8.222.208.38','8.222.219.34','8.219.201.245','8.219.240.160','8.222.128.131','8.222.212.255','8.219.78.1','8.222.193.208','8.222.221.109','8.219.152.195','8.219.210.64','8.219.122.96','8.219.140.63','8.222.224.17','8.222.253.235','8.219.159.232','8.219.193.22','8.219.167.65','8.219.73.21','8.222.252.150','8.219.142.191','8.219.170.223','8.219.84.102','8.219.100.155','8.219.197.111','8.219.5.10','8.222.180.242','8.219.106.15','8.222.212.219','8.219.201.8','8.222.255.15','8.222.221.86','8.219.106.156','8.222.197.251','8.219.13.143','8.222.226.15','8.222.244.123','8.222.213.221','8.219.200.145','8.219.142.229','8.219.60.68','13.213.188.26','13.228.50.161','13.213.110.156','13.250.131.37','15.235.140.240','15.235.167.49','18.141.35.0','18.140.96.144','18.142.55.98','18.136.34.103','18.141.231.168','20.212.1.73','23.27.101.61','27.0.234.68','34.142.214.11','34.126.143.172','35.198.209.39','38.150.8.51','38.180.9.68','43.134.104.242','43.156.27.249','43.156.235.68','43.156.116.194','43.134.44.29','43.156.181.203','45.118.134.185','45.76.148.81','47.245.115.6','47.245.86.230','47.236.104.98','47.246.12.118','47.236.109.189','47.245.111.136','47.236.116.182','47.236.11.84','47.236.112.218','47.245.107.174','47.236.117.48','47.241.209.61','47.245.100.33','47.245.96.163','47.236.12.195','51.79.254.182','52.74.101.26','52.77.110.99','52.221.223.125','54.169.232.176','54.169.96.58','54.179.184.9','54.169.229.188','54.179.253.222','68.183.188.204','68.183.188.77','68.183.225.37','68.183.184.131','68.183.234.30','68.183.180.55','68.183.239.155','68.183.228.187','68.183.183.155','84.17.38.132','96.9.212.119','103.153.154.6','103.6.169.88','103.65.36.174','103.253.146.227','103.123.8.46','103.167.82.200','103.167.151.76','103.190.179.28','103.167.151.182','103.73.218.116','104.248.159.2','124.156.202.46','128.199.217.141','128.199.216.200','128.199.86.154','128.199.208.7','128.199.195.36','128.199.132.86','128.199.246.102','128.199.70.169','128.199.194.141','128.199.234.147','128.199.216.46','128.199.83.194','128.199.133.250','128.199.223.243','128.199.95.238','128.199.241.148','128.199.84.239','128.199.136.238','128.199.207.147','128.199.221.26','128.199.216.189','128.199.157.218','128.199.148.7','128.199.138.74','128.199.239.161','128.199.158.180','128.199.224.113','128.199.239.225','128.199.93.160','128.199.134.126','128.199.205.66','128.199.147.34','128.199.221.116','128.199.136.75','128.199.193.94','128.199.160.252','128.199.158.144','128.199.223.216','128.199.143.175','128.199.111.230','128.199.79.228','129.226.194.200','134.209.99.219','134.209.106.183','134.209.106.72','134.209.97.201','134.209.102.171','139.59.251.132','139.59.229.72','139.59.105.233','139.59.249.137','139.59.229.100','139.59.226.101','139.59.239.143','139.59.244.46','139.59.229.128','139.162.3.140','139.59.225.40','139.59.232.44','139.177.186.37','139.59.236.241','139.59.238.230','139.59.113.225','139.59.245.8','139.59.254.72','139.59.242.97','139.59.245.162','139.59.118.52','143.198.199.245','143.198.95.46','143.198.89.157','143.198.207.149','143.198.198.172','143.198.91.81','143.198.219.3','143.198.82.147','143.198.223.247','143.198.223.152','143.198.91.5','143.198.217.1','143.198.91.124','143.198.91.32','143.198.84.189','143.198.215.35','143.198.88.29','143.198.94.247','143.198.223.30','143.198.88.17','143.198.200.26','143.198.95.233','143.198.217.181','143.198.81.32','143.198.206.120','146.190.99.39','146.190.83.25','146.190.99.118','146.190.87.248','146.70.149.152','146.190.83.216','146.190.97.181','146.190.111.129','146.190.105.20','146.190.83.209','146.190.88.137','146.190.91.82','146.190.83.205','146.190.109.121','146.190.83.74','146.190.99.199','146.190.80.191','156.253.7.111','156.154.245.84','156.154.245.83','157.245.158.151','157.245.152.212','157.230.244.136','157.245.54.21','157.230.43.152','157.245.55.35','157.230.37.71','157.245.53.151','157.245.62.150','157.245.152.88','157.230.252.86','157.230.37.5','157.245.199.184','157.245.53.16','157.245.202.116','157.230.39.14','159.89.207.163','159.89.200.74','159.65.3.249','159.223.32.121','159.89.206.217','159.223.78.54','159.223.36.235','159.223.35.142','159.65.142.52','159.89.207.44','159.65.9.131','159.223.85.221','159.223.45.185','159.223.38.241','159.65.9.220','159.223.85.160','159.89.193.202','159.223.73.99','159.89.192.117','159.223.85.166','159.65.136.115','159.223.71.251','163.181.160.70','163.181.82.72','163.181.94.86','163.181.16.113','163.181.88.80','163.181.105.104','165.22.101.139','165.232.165.56','165.22.241.223','165.22.248.61','165.22.59.95','165.232.165.3','165.22.244.50','165.22.61.46','165.232.162.22','165.232.175.116','165.232.167.3','165.22.63.159','165.22.103.134','165.22.245.13','167.172.83.7','167.71.220.254','167.172.69.39','167.71.223.99','167.172.75.67','167.172.65.237','167.172.86.144','167.172.75.231','167.172.77.34','167.71.221.237','167.172.82.132','167.172.85.80','167.172.94.240','167.172.86.179','167.71.216.241','167.99.73.255','167.71.211.191','167.71.219.52','167.71.209.227','167.71.215.118','170.187.230.7','172.104.170.189','172.105.126.45','172.104.163.50','174.138.20.94','174.138.18.195','174.138.30.234','174.138.21.91','174.138.16.14','178.128.223.23','178.128.80.8','178.128.87.192','178.128.102.85','178.128.213.184','178.128.119.217','178.128.211.53','178.128.22.186','178.128.223.107','178.128.124.251','178.128.53.162','178.128.114.60','178.128.111.191','178.128.62.68','178.128.111.147','178.128.55.246','178.128.212.222','178.128.118.239','178.128.114.61','178.128.209.253','178.128.96.32','178.128.80.207','178.128.222.89','185.196.99.52','185.206.57.18','185.217.5.3','188.166.238.151','188.166.246.48','188.166.231.27','188.166.246.147','188.166.248.235','188.166.252.111','188.166.236.121','188.166.179.193','188.166.206.136','188.166.233.22','188.166.225.77','188.166.217.12','188.166.183.48','188.166.244.121','188.166.213.189','188.166.216.168','188.166.215.167','188.166.191.114','188.166.185.187','188.166.206.82','188.166.186.239','188.166.225.146','188.166.225.6','194.36.179.45','194.36.179.240','194.59.165.102','206.189.34.49','206.189.154.123','206.189.159.89','206.189.84.194','206.189.88.214','206.189.85.104','206.189.40.184','206.189.45.250','206.189.89.137','206.189.41.132','206.189.149.91','206.189.156.198','206.189.154.236','209.97.164.62','209.97.173.243','209.97.169.100','209.97.174.171','209.97.168.49','209.97.172.219','209.97.167.168','209.97.168.181','209.97.174.10'];
let proxyIP = proxyIPs[Math.floor(Math.random() * proxyIPs.length)];
//let proxyIP = '';

let dohURL = 'https://dns.google/dns-query'; // https://cloudflare-dns.com/dns-query or https://dns.google/dns-query

// v2board api environment variables (optional) deprecated, please use planetscale.com instead

if (!isValidUUID(userID)) {
	throw new Error('uuid is invalid');
}

export default {
	/**
	 * @param {import("@cloudflare/workers-types").Request} request
	 * @param {{UUID: string, PROXYIP: string, DNS_RESOLVER_URL: string, NODE_ID: int, API_HOST: string, API_TOKEN: string}} env
	 * @param {import("@cloudflare/workers-types").ExecutionContext} ctx
	 * @returns {Promise<Response>}
	 */
	async fetch(request, env, ctx) {
		// uuid_validator(request);
		try {
			userID = env.UUID || userID;
			proxyIP = env.PROXYIP || proxyIP;
			dohURL = env.DNS_RESOLVER_URL || dohURL;
			let userID_Path = userID;
			if (userID.includes(',')) {
				userID_Path = userID.split(',')[0];
			}
			const upgradeHeader = request.headers.get('Upgrade');
			if (!upgradeHeader || upgradeHeader !== 'websocket') {
				const url = new URL(request.url);
				switch (url.pathname) {
					case '/cf':
						return new Response(JSON.stringify(request.cf, null, 4), {
							status: 200,
							headers: {
								"Content-Type": "application/json;charset=utf-8",
							},
						});
					case `/${userID_Path}`: {
						const vlessConfig = getVLESSConfig(userID, request.headers.get('Host'));
						return new Response(`${vlessConfig}`, {
							status: 200,
							headers: {
								"Content-Type": "text/html; charset=utf-8",
							}
						});
					}
					case `/sub/${userID_Path}`: {
						const url = new URL(request.url);
						const searchParams = url.searchParams;
						let vlessConfig = createVLESSSub(userID, request.headers.get('Host'));
						// If 'format' query param equals to 'clash', convert config to base64
						if (searchParams.get('format') === 'clash') {
							vlessConfig = btoa(vlessConfig);
						}
						// Construct and return response object
						return new Response(vlessConfig, {
							status: 200,
							headers: {
								"Content-Type": "text/plain;charset=utf-8",
							}
						});
					}
					case `/bestip/${userID_Path}`: {
						const bestiplink = `https://sub.xf.free.hr/auto?host=${request.headers.get('Host')}&uuid=${userID_Path}`
						const reqHeaders = new Headers(request.headers);
						const bestipresponse = await fetch(bestiplink, { redirect: 'manual', headers: reqHeaders, });
						// Construct and return response object
						return bestipresponse
					}
					default:
						// return new Response('Not found', { status: 404 });
						// For any other path, reverse proxy to 'www.fmprc.gov.cn' and return the original response, caching it in the process
						const hostnames = ['www.fmprc.gov.cn', 'www.xuexi.cn', 'www.gov.cn', 'mail.gov.cn', 'www.mofcom.gov.cn', 'www.gfbzb.gov.cn', 'www.miit.gov.cn', 'www.12377.cn'];
						url.hostname = hostnames[Math.floor(Math.random() * hostnames.length)];
						url.protocol = 'https:';

						const newHeaders = new Headers(request.headers);
						newHeaders.set('cf-connecting-ip', newHeaders.get('x-forwarded-for') || newHeaders.get('cf-connecting-ip'));
						newHeaders.set('x-forwarded-for', newHeaders.get('cf-connecting-ip'));
						newHeaders.set('x-real-ip', newHeaders.get('cf-connecting-ip'));
						newHeaders.set('referer', 'https://www.google.com/q=edtunnel');

						request = new Request(url, {
							method: request.method,
							headers: newHeaders,
							body: request.body,
							redirect: request.redirect,
						});

						const cache = caches.default;
						let response = await cache.match(request);

						if (!response) {
							try {
								response = await fetch(request, { redirect: 'manual' });
							} catch (err) {
								url.protocol = 'http:';
								url.hostname = hostnames[Math.floor(Math.random() * hostnames.length)];
								request = new Request(url, {
									method: request.method,
									headers: newHeaders,
									body: request.body,
									redirect: request.redirect,
								});
								response = await fetch(request, { redirect: 'manual' });
							}

							const cloneResponse = response.clone();
							ctx.waitUntil(cache.put(request, cloneResponse));
						}
						return response;
				}
			} else {
				return await vlessOverWSHandler(request);
			}
		} catch (err) {
			/** @type {Error} */ let e = err;
			return new Response(e.toString());
		}
	},
};

export async function uuid_validator(request) {
	const hostname = request.headers.get('Host');
	const currentDate = new Date();

	const subdomain = hostname.split('.')[0];
	const year = currentDate.getFullYear();
	const month = String(currentDate.getMonth() + 1).padStart(2, '0');
	const day = String(currentDate.getDate()).padStart(2, '0');

	const formattedDate = `${year}-${month}-${day}`;

	// const daliy_sub = formattedDate + subdomain
	const hashHex = await hashHex_f(subdomain);
	// subdomain string contains timestamps utc and uuid string TODO.
	console.log(hashHex, subdomain, formattedDate);
}

export async function hashHex_f(string) {
	const encoder = new TextEncoder();
	const data = encoder.encode(string);
	const hashBuffer = await crypto.subtle.digest('SHA-256', data);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
	return hashHex;
}

/**
 * Handles VLESS over WebSocket requests by creating a WebSocket pair, accepting the WebSocket connection, and processing the VLESS header.
 * @param {import("@cloudflare/workers-types").Request} request The incoming request object.
 * @returns {Promise<Response>} A Promise that resolves to a WebSocket response object.
 */
async function vlessOverWSHandler(request) {
	const webSocketPair = new WebSocketPair();
	const [client, webSocket] = Object.values(webSocketPair);
	webSocket.accept();

	let address = '';
	let portWithRandomLog = '';
	let currentDate = new Date();
	const log = (/** @type {string} */ info, /** @type {string | undefined} */ event) => {
		console.log(`[${currentDate} ${address}:${portWithRandomLog}] ${info}`, event || '');
	};
	const earlyDataHeader = request.headers.get('sec-websocket-protocol') || '';

	const readableWebSocketStream = makeReadableWebSocketStream(webSocket, earlyDataHeader, log);

	/** @type {{ value: import("@cloudflare/workers-types").Socket | null}}*/
	let remoteSocketWapper = {
		value: null,
	};
	let udpStreamWrite = null;
	let isDns = false;

	// ws --> remote
	readableWebSocketStream.pipeTo(new WritableStream({
		async write(chunk, controller) {
			if (isDns && udpStreamWrite) {
				return udpStreamWrite(chunk);
			}
			if (remoteSocketWapper.value) {
				const writer = remoteSocketWapper.value.writable.getWriter()
				await writer.write(chunk);
				writer.releaseLock();
				return;
			}

			const {
				hasError,
				message,
				portRemote = 443,
				addressRemote = '',
				rawDataIndex,
				vlessVersion = new Uint8Array([0, 0]),
				isUDP,
			} = processVlessHeader(chunk, userID);
			address = addressRemote;
			portWithRandomLog = `${portRemote} ${isUDP ? 'udp' : 'tcp'} `;
			if (hasError) {
				// controller.error(message);
				throw new Error(message); // cf seems has bug, controller.error will not end stream
				// webSocket.close(1000, message);
				return;
			}

			// If UDP and not DNS port, close it
			if (isUDP && portRemote !== 53) {
				throw new Error('UDP proxy only enabled for DNS which is port 53');
				// cf seems has bug, controller.error will not end stream
			}

			if (isUDP && portRemote === 53) {
				isDns = true;
			}

			// ["version", "附加信息长度 N"]
			const vlessResponseHeader = new Uint8Array([vlessVersion[0], 0]);
			const rawClientData = chunk.slice(rawDataIndex);

			// TODO: support udp here when cf runtime has udp support
			if (isDns) {
				const { write } = await handleUDPOutBound(webSocket, vlessResponseHeader, log);
				udpStreamWrite = write;
				udpStreamWrite(rawClientData);
				return;
			}
			handleTCPOutBound(remoteSocketWapper, addressRemote, portRemote, rawClientData, webSocket, vlessResponseHeader, log);
		},
		close() {
			log(`readableWebSocketStream is close`);
		},
		abort(reason) {
			log(`readableWebSocketStream is abort`, JSON.stringify(reason));
		},
	})).catch((err) => {
		log('readableWebSocketStream pipeTo error', err);
	});

	return new Response(null, {
		status: 101,
		webSocket: client,
	});
}

/**
 * Handles outbound TCP connections.
 *
 * @param {any} remoteSocket 
 * @param {string} addressRemote The remote address to connect to.
 * @param {number} portRemote The remote port to connect to.
 * @param {Uint8Array} rawClientData The raw client data to write.
 * @param {import("@cloudflare/workers-types").WebSocket} webSocket The WebSocket to pass the remote socket to.
 * @param {Uint8Array} vlessResponseHeader The VLESS response header.
 * @param {function} log The logging function.
 * @returns {Promise<void>} The remote socket.
 */
async function handleTCPOutBound(remoteSocket, addressRemote, portRemote, rawClientData, webSocket, vlessResponseHeader, log,) {

	/**
	 * Connects to a given address and port and writes data to the socket.
	 * @param {string} address The address to connect to.
	 * @param {number} port The port to connect to.
	 * @returns {Promise<import("@cloudflare/workers-types").Socket>} A Promise that resolves to the connected socket.
	 */
	async function connectAndWrite(address, port) {
		/** @type {import("@cloudflare/workers-types").Socket} */
		const tcpSocket = connect({
			hostname: address,
			port: port,
		});
		remoteSocket.value = tcpSocket;
		log(`connected to ${address}:${port}`);
		const writer = tcpSocket.writable.getWriter();
		await writer.write(rawClientData); // first write, nomal is tls client hello
		writer.releaseLock();
		return tcpSocket;
	}

	/**
	 * Retries connecting to the remote address and port if the Cloudflare socket has no incoming data.
	 * @returns {Promise<void>} A Promise that resolves when the retry is complete.
	 */
	async function retry() {
		const tcpSocket = await connectAndWrite(proxyIP || addressRemote, portRemote)
		tcpSocket.closed.catch(error => {
			console.log('retry tcpSocket closed error', error);
		}).finally(() => {
			safeCloseWebSocket(webSocket);
		})
		remoteSocketToWS(tcpSocket, webSocket, vlessResponseHeader, null, log);
	}

	const tcpSocket = await connectAndWrite(addressRemote, portRemote);

	// when remoteSocket is ready, pass to websocket
	// remote--> ws
	remoteSocketToWS(tcpSocket, webSocket, vlessResponseHeader, retry, log);
}

/**
 * Creates a readable stream from a WebSocket server, allowing for data to be read from the WebSocket.
 * @param {import("@cloudflare/workers-types").WebSocket} webSocketServer The WebSocket server to create the readable stream from.
 * @param {string} earlyDataHeader The header containing early data for WebSocket 0-RTT.
 * @param {(info: string)=> void} log The logging function.
 * @returns {ReadableStream} A readable stream that can be used to read data from the WebSocket.
 */
function makeReadableWebSocketStream(webSocketServer, earlyDataHeader, log) {
	let readableStreamCancel = false;
	const stream = new ReadableStream({
		start(controller) {
			webSocketServer.addEventListener('message', (event) => {
				const message = event.data;
				controller.enqueue(message);
			});

			webSocketServer.addEventListener('close', () => {
				safeCloseWebSocket(webSocketServer);
				controller.close();
			});

			webSocketServer.addEventListener('error', (err) => {
				log('webSocketServer has error');
				controller.error(err);
			});
			const { earlyData, error } = base64ToArrayBuffer(earlyDataHeader);
			if (error) {
				controller.error(error);
			} else if (earlyData) {
				controller.enqueue(earlyData);
			}
		},

		pull(controller) {
			// if ws can stop read if stream is full, we can implement backpressure
			// https://streams.spec.whatwg.org/#example-rs-push-backpressure
		},

		cancel(reason) {
			log(`ReadableStream was canceled, due to ${reason}`)
			readableStreamCancel = true;
			safeCloseWebSocket(webSocketServer);
		}
	});

	return stream;
}

// https://xtls.github.io/development/protocols/vless.html
// https://github.com/zizifn/excalidraw-backup/blob/main/v2ray-protocol.excalidraw

/**
 * Processes the VLESS header buffer and returns an object with the relevant information.
 * @param {ArrayBuffer} vlessBuffer The VLESS header buffer to process.
 * @param {string} userID The user ID to validate against the UUID in the VLESS header.
 * @returns {{
 *  hasError: boolean,
 *  message?: string,
 *  addressRemote?: string,
 *  addressType?: number,
 *  portRemote?: number,
 *  rawDataIndex?: number,
 *  vlessVersion?: Uint8Array,
 *  isUDP?: boolean
 * }} An object with the relevant information extracted from the VLESS header buffer.
 */
function processVlessHeader(vlessBuffer, userID) {
	if (vlessBuffer.byteLength < 24) {
		return {
			hasError: true,
			message: 'invalid data',
		};
	}

	const version = new Uint8Array(vlessBuffer.slice(0, 1));
	let isValidUser = false;
	let isUDP = false;
	const slicedBuffer = new Uint8Array(vlessBuffer.slice(1, 17));
	const slicedBufferString = stringify(slicedBuffer);
	// check if userID is valid uuid or uuids split by , and contains userID in it otherwise return error message to console
	const uuids = userID.includes(',') ? userID.split(",") : [userID];
	// uuid_validator(hostName, slicedBufferString);


	// isValidUser = uuids.some(userUuid => slicedBufferString === userUuid.trim());
	isValidUser = uuids.some(userUuid => slicedBufferString === userUuid.trim()) || uuids.length === 1 && slicedBufferString === uuids[0].trim();

	console.log(`userID: ${slicedBufferString}`);

	if (!isValidUser) {
		return {
			hasError: true,
			message: 'invalid user',
		};
	}

	const optLength = new Uint8Array(vlessBuffer.slice(17, 18))[0];
	//skip opt for now

	const command = new Uint8Array(
		vlessBuffer.slice(18 + optLength, 18 + optLength + 1)
	)[0];

	// 0x01 TCP
	// 0x02 UDP
	// 0x03 MUX
	if (command === 1) {
		isUDP = false;
	} else if (command === 2) {
		isUDP = true;
	} else {
		return {
			hasError: true,
			message: `command ${command} is not support, command 01-tcp,02-udp,03-mux`,
		};
	}
	const portIndex = 18 + optLength + 1;
	const portBuffer = vlessBuffer.slice(portIndex, portIndex + 2);
	// port is big-Endian in raw data etc 80 == 0x005d
	const portRemote = new DataView(portBuffer).getUint16(0);

	let addressIndex = portIndex + 2;
	const addressBuffer = new Uint8Array(
		vlessBuffer.slice(addressIndex, addressIndex + 1)
	);

	// 1--> ipv4  addressLength =4
	// 2--> domain name addressLength=addressBuffer[1]
	// 3--> ipv6  addressLength =16
	const addressType = addressBuffer[0];
	let addressLength = 0;
	let addressValueIndex = addressIndex + 1;
	let addressValue = '';
	switch (addressType) {
		case 1:
			addressLength = 4;
			addressValue = new Uint8Array(
				vlessBuffer.slice(addressValueIndex, addressValueIndex + addressLength)
			).join('.');
			break;
		case 2:
			addressLength = new Uint8Array(
				vlessBuffer.slice(addressValueIndex, addressValueIndex + 1)
			)[0];
			addressValueIndex += 1;
			addressValue = new TextDecoder().decode(
				vlessBuffer.slice(addressValueIndex, addressValueIndex + addressLength)
			);
			break;
		case 3:
			addressLength = 16;
			const dataView = new DataView(
				vlessBuffer.slice(addressValueIndex, addressValueIndex + addressLength)
			);
			// 2001:0db8:85a3:0000:0000:8a2e:0370:7334
			const ipv6 = [];
			for (let i = 0; i < 8; i++) {
				ipv6.push(dataView.getUint16(i * 2).toString(16));
			}
			addressValue = ipv6.join(':');
			// seems no need add [] for ipv6
			break;
		default:
			return {
				hasError: true,
				message: `invild  addressType is ${addressType}`,
			};
	}
	if (!addressValue) {
		return {
			hasError: true,
			message: `addressValue is empty, addressType is ${addressType}`,
		};
	}

	return {
		hasError: false,
		addressRemote: addressValue,
		addressType,
		portRemote,
		rawDataIndex: addressValueIndex + addressLength,
		vlessVersion: version,
		isUDP,
	};
}


/**
 * Converts a remote socket to a WebSocket connection.
 * @param {import("@cloudflare/workers-types").Socket} remoteSocket The remote socket to convert.
 * @param {import("@cloudflare/workers-types").WebSocket} webSocket The WebSocket to connect to.
 * @param {ArrayBuffer | null} vlessResponseHeader The VLESS response header.
 * @param {(() => Promise<void>) | null} retry The function to retry the connection if it fails.
 * @param {(info: string) => void} log The logging function.
 * @returns {Promise<void>} A Promise that resolves when the conversion is complete.
 */
async function remoteSocketToWS(remoteSocket, webSocket, vlessResponseHeader, retry, log) {
	// remote--> ws
	let remoteChunkCount = 0;
	let chunks = [];
	/** @type {ArrayBuffer | null} */
	let vlessHeader = vlessResponseHeader;
	let hasIncomingData = false; // check if remoteSocket has incoming data
	await remoteSocket.readable
		.pipeTo(
			new WritableStream({
				start() {
				},
				/**
				 * 
				 * @param {Uint8Array} chunk 
				 * @param {*} controller 
				 */
				async write(chunk, controller) {
					hasIncomingData = true;
					remoteChunkCount++;
					if (webSocket.readyState !== WS_READY_STATE_OPEN) {
						controller.error(
							'webSocket.readyState is not open, maybe close'
						);
					}
					if (vlessHeader) {
						webSocket.send(await new Blob([vlessHeader, chunk]).arrayBuffer());
						vlessHeader = null;
					} else {
						// console.log(`remoteSocketToWS send chunk ${chunk.byteLength}`);
						// seems no need rate limit this, CF seems fix this??..
						// if (remoteChunkCount > 20000) {
						// 	// cf one package is 4096 byte(4kb),  4096 * 20000 = 80M
						// 	await delay(1);
						// }
						webSocket.send(chunk);
					}
				},
				close() {
					log(`remoteConnection!.readable is close with hasIncomingData is ${hasIncomingData}`);
					// safeCloseWebSocket(webSocket); // no need server close websocket frist for some case will casue HTTP ERR_CONTENT_LENGTH_MISMATCH issue, client will send close event anyway.
				},
				abort(reason) {
					console.error(`remoteConnection!.readable abort`, reason);
				},
			})
		)
		.catch((error) => {
			console.error(
				`remoteSocketToWS has exception `,
				error.stack || error
			);
			safeCloseWebSocket(webSocket);
		});

	// seems is cf connect socket have error,
	// 1. Socket.closed will have error
	// 2. Socket.readable will be close without any data coming
	if (hasIncomingData === false && retry) {
		log(`retry`)
		retry();
	}
}

/**
 * Decodes a base64 string into an ArrayBuffer.
 * @param {string} base64Str The base64 string to decode.
 * @returns {{earlyData: ArrayBuffer|null, error: Error|null}} An object containing the decoded ArrayBuffer or null if there was an error, and any error that occurred during decoding or null if there was no error.
 */
function base64ToArrayBuffer(base64Str) {
	if (!base64Str) {
		return { earlyData: null, error: null };
	}
	try {
		// go use modified Base64 for URL rfc4648 which js atob not support
		base64Str = base64Str.replace(/-/g, '+').replace(/_/g, '/');
		const decode = atob(base64Str);
		const arryBuffer = Uint8Array.from(decode, (c) => c.charCodeAt(0));
		return { earlyData: arryBuffer.buffer, error: null };
	} catch (error) {
		return { earlyData: null, error };
	}
}

/**
 * Checks if a given string is a valid UUID.
 * Note: This is not a real UUID validation.
 * @param {string} uuid The string to validate as a UUID.
 * @returns {boolean} True if the string is a valid UUID, false otherwise.
 */
function isValidUUID(uuid) {
	const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
	return uuidRegex.test(uuid);
}

const WS_READY_STATE_OPEN = 1;
const WS_READY_STATE_CLOSING = 2;
/**
 * Closes a WebSocket connection safely without throwing exceptions.
 * @param {import("@cloudflare/workers-types").WebSocket} socket The WebSocket connection to close.
 */
function safeCloseWebSocket(socket) {
	try {
		if (socket.readyState === WS_READY_STATE_OPEN || socket.readyState === WS_READY_STATE_CLOSING) {
			socket.close();
		}
	} catch (error) {
		console.error('safeCloseWebSocket error', error);
	}
}

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
	byteToHex.push((i + 256).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
	return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
	const uuid = unsafeStringify(arr, offset);
	if (!isValidUUID(uuid)) {
		throw TypeError("Stringified UUID is invalid");
	}
	return uuid;
}


/**
 * Handles outbound UDP traffic by transforming the data into DNS queries and sending them over a WebSocket connection.
 * @param {import("@cloudflare/workers-types").WebSocket} webSocket The WebSocket connection to send the DNS queries over.
 * @param {ArrayBuffer} vlessResponseHeader The VLESS response header.
 * @param {(string) => void} log The logging function.
 * @returns {{write: (chunk: Uint8Array) => void}} An object with a write method that accepts a Uint8Array chunk to write to the transform stream.
 */
async function handleUDPOutBound(webSocket, vlessResponseHeader, log) {

	let isVlessHeaderSent = false;
	const transformStream = new TransformStream({
		start(controller) {

		},
		transform(chunk, controller) {
			// udp message 2 byte is the the length of udp data
			// TODO: this should have bug, beacsue maybe udp chunk can be in two websocket message
			for (let index = 0; index < chunk.byteLength;) {
				const lengthBuffer = chunk.slice(index, index + 2);
				const udpPakcetLength = new DataView(lengthBuffer).getUint16(0);
				const udpData = new Uint8Array(
					chunk.slice(index + 2, index + 2 + udpPakcetLength)
				);
				index = index + 2 + udpPakcetLength;
				controller.enqueue(udpData);
			}
		},
		flush(controller) {
		}
	});

	// only handle dns udp for now
	transformStream.readable.pipeTo(new WritableStream({
		async write(chunk) {
			const resp = await fetch(dohURL, // dns server url
				{
					method: 'POST',
					headers: {
						'content-type': 'application/dns-message',
					},
					body: chunk,
				})
			const dnsQueryResult = await resp.arrayBuffer();
			const udpSize = dnsQueryResult.byteLength;
			// console.log([...new Uint8Array(dnsQueryResult)].map((x) => x.toString(16)));
			const udpSizeBuffer = new Uint8Array([(udpSize >> 8) & 0xff, udpSize & 0xff]);
			if (webSocket.readyState === WS_READY_STATE_OPEN) {
				log(`doh success and dns message length is ${udpSize}`);
				if (isVlessHeaderSent) {
					webSocket.send(await new Blob([udpSizeBuffer, dnsQueryResult]).arrayBuffer());
				} else {
					webSocket.send(await new Blob([vlessResponseHeader, udpSizeBuffer, dnsQueryResult]).arrayBuffer());
					isVlessHeaderSent = true;
				}
			}
		}
	})).catch((error) => {
		log('dns udp has error' + error)
	});

	const writer = transformStream.writable.getWriter();

	return {
		/**
		 * 
		 * @param {Uint8Array} chunk 
		 */
		write(chunk) {
			writer.write(chunk);
		}
	};
}

/**
 *
 * @param {string} userID - single or comma separated userIDs
 * @param {string | null} hostName
 * @returns {string}
 */
function getVLESSConfig(userIDs, hostName) {
	const commonUrlPart = `:443?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2048#${hostName}`;
	const separator = "---------------------------------------------------------------";
	const hashSeparator = "################################################################";

	// Split the userIDs into an array
	let userIDArray = userIDs.split(',');

	// Prepare output array
	let output = [];
	let header = [];
	const clash_link = `https://subconverter.do.xn--b6gac.eu.org/sub?target=clash&url=https://${hostName}/sub/${userIDArray[0]}?format=clash&insert=false&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
	header.push(`\n<p align="center"><img src="https://cloudflare-ipfs.com/ipfs/bafybeigd6i5aavwpr6wvnwuyayklq3omonggta4x2q7kpmgafj357nkcky" alt="图片描述" style="margin-bottom: -50px;">`);
	header.push(`\n<b style=" font-size: 15px;" >Welcome! This function generates configuration for VLESS protocol. If you found this useful, please check our GitHub project for more:</b>\n`);
	header.push(`<b style=" font-size: 15px;" >欢迎！这是生成 VLESS 协议的配置。如果您发现这个项目很好用，请查看我们的 GitHub 项目给我一个star：</b>\n`);
	header.push(`\n<a href="https://github.com/3Kmfi6HP/EDtunnel" target="_blank">EDtunnel - https://github.com/3Kmfi6HP/EDtunnel</a>\n`);
	header.push(`\n<iframe src="https://ghbtns.com/github-btn.html?user=USERNAME&repo=REPOSITORY&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>\n\n`.replace(/USERNAME/g, "3Kmfi6HP").replace(/REPOSITORY/g, "EDtunnel"));
	header.push(`<a href="//${hostName}/sub/${userIDArray[0]}" target="_blank">VLESS 节点订阅连接</a>\n<a href="clash://install-config?url=${encodeURIComponent(clash_link)}" target="_blank">Clash 节点订阅连接</a>\n<a href="${clash_link}" target="_blank">Clash 节点订阅连接2</a></p>\n`);
	header.push(``);

	// Generate output string for each userID
	userIDArray.forEach((userID) => {
		const vlessMain = `vless://${userID}@${hostName}${commonUrlPart}`;
		const vlessSec = `vless://${userID}@${proxyIP}${commonUrlPart}`;
		output.push(`UUID: ${userID}`);
		output.push(`${hashSeparator}\nv2ray default ip\n${separator}\n${vlessMain}\n${separator}`);
		output.push(`${hashSeparator}\nv2ray with best ip\n${separator}\n${vlessSec}\n${separator}`);
	});
	output.push(`${hashSeparator}\n# Clash Proxy Provider 配置格式(configuration format)\nproxy-groups:\n  - name: UseProvider\n	type: select\n	use:\n	  - provider1\n	proxies:\n	  - Proxy\n	  - DIRECT\nproxy-providers:\n  provider1:\n	type: http\n	url: https://${hostName}/sub/${userIDArray[0]}?format=clash\n	interval: 3600\n	path: ./provider1.yaml\n	health-check:\n	  enable: true\n	  interval: 600\n	  # lazy: true\n	  url: http://www.gstatic.com/generate_204\n\n${hashSeparator}`);

	// HTML Head with CSS
	const htmlHead = `
    <head>
        <title>EDtunnel: VLESS configuration</title>
        <meta name="description" content="This is a tool for generating VLESS protocol configurations. Give us a star on GitHub https://github.com/3Kmfi6HP/EDtunnel if you found it useful!">
		<meta name="keywords" content="EDtunnel, cloudflare pages, cloudflare worker, severless">
        <meta name="viewport" content="width=device-width, initial-scale=1">
		<meta property="og:site_name" content="EDtunnel: VLESS configuration" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="EDtunnel - VLESS configuration and subscribe output" />
        <meta property="og:description" content="Use cloudflare pages and worker severless to implement vless protocol" />
        <meta property="og:url" content="https://${hostName}/" />
        <meta property="og:image" content="https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(`vless://${userIDs.split(',')[0]}@${hostName}${commonUrlPart}`)}" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EDtunnel - VLESS configuration and subscribe output" />
        <meta name="twitter:description" content="Use cloudflare pages and worker severless to implement vless protocol" />
        <meta name="twitter:url" content="https://${hostName}/" />
        <meta name="twitter:image" content="https://cloudflare-ipfs.com/ipfs/bafybeigd6i5aavwpr6wvnwuyayklq3omonggta4x2q7kpmgafj357nkcky" />
        <meta property="og:image:width" content="1500" />
        <meta property="og:image:height" content="1500" />

        <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            color: #333;
            padding: 10px;
        }

        a {
            color: #1a0dab;
            text-decoration: none;
        }
		img {
			max-width: 100%;
			height: auto;
		}
		
        pre {
            white-space: pre-wrap;
            word-wrap: break-word;
            background-color: #fff;
            border: 1px solid #ddd;
            padding: 15px;
            margin: 10px 0;
        }
		/* Dark mode */
        @media (prefers-color-scheme: dark) {
            body {
                background-color: #333;
                color: #f0f0f0;
            }

            a {
                color: #9db4ff;
            }

            pre {
                background-color: #282a36;
                border-color: #6272a4;
            }
        }
        </style>
    </head>
    `;

	// Join output with newlines, wrap inside <html> and <body>
	return `
    <html>
    ${htmlHead}
    <body>
    <pre style="
    background-color: transparent;
    border: none;
">${header.join('')}</pre><pre>${output.join('\n')}</pre>
    </body>
</html>`;
}


function createVLESSSub(userID_Path, hostName) {
	let portArray_http = [80, 8080, 8880, 2052, 2086, 2095, 2082];
	let portArray_https = [443, 8443, 2053, 2096, 2087, 2083];

	// Split the userIDs into an array
	let userIDArray = userID_Path.includes(',') ? userID_Path.split(',') : [userID_Path];

	// Prepare output array
	let output = [];

	// Generate output string for each userID
	userIDArray.forEach((userID) => {
		// Check if the hostName is a Cloudflare Pages domain, if not, generate HTTP configurations
		// reasons: pages.dev not support http only https
		if (!hostName.includes('pages.dev')) {
			// Iterate over all ports for http
			portArray_http.forEach((port) => {
				const commonUrlPart_http = `:${port}?encryption=none&security=none&fp=random&type=ws&host=${hostName}&path=%2F%3Fed%3D2048#${hostName}-HTTP-${port}`;
				const vlessMainHttp = `vless://${userID}@${hostName}${commonUrlPart_http}`;

				// For each proxy IP, generate a VLESS configuration and add to output
				proxyIPs.forEach((proxyIP) => {
					const vlessSecHttp = `vless://${userID}@${proxyIP}${commonUrlPart_http}-${proxyIP}-EDtunnel`;
					output.push(`${vlessMainHttp}`);
					output.push(`${vlessSecHttp}`);
				});
			});
		}
		// Iterate over all ports for https
		portArray_https.forEach((port) => {
			const commonUrlPart_https = `:${port}?encryption=none&security=tls&sni=${hostName}&fp=random&type=ws&host=${hostName}&path=%2F%3Fed%3D2048#${hostName}-HTTPS-${port}`;
			const vlessMainHttps = `vless://${userID}@${hostName}${commonUrlPart_https}`;

			// For each proxy IP, generate a VLESS configuration and add to output
			proxyIPs.forEach((proxyIP) => {
				const vlessSecHttps = `vless://${userID}@${proxyIP}${commonUrlPart_https}-${proxyIP}-EDtunnel`;
				output.push(`${vlessMainHttps}`);
				output.push(`${vlessSecHttps}`);
			});
		});
	});

	// Join output with newlines
	return output.join('\n');
}

