import { JSEncrypt } from './jsencrypt'

// console.log(JSEncrypt)

// 公钥
const PUBLICKKEY = '-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCwR7rpg9iL+AzZrz72WHEl0s+Yo9ah4lyrNiMrfRxsWSYoWmHIjOiRbFZa+2by9Jtf3MO2FM0b8tu5r6CJ1KD6dysIxiMQ0/w58rTFipXNseICxMge1g6ZBFc/qW0s+PHlfgnXRkf43NnAfAkDY/WH/6/1Fx10H2kboJ6udhBXAwIDAQAB\n-----END PUBLIC KEY-----'
// 私钥
const PRIVATEKEY = 'MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAIozeJ3KfceTZcj0lVDnCtzaAh2egjjNEqXA/pIVnGUeoadycdLIg32KihAyagNRf1ebq/noBYr3O86U2pOhiPb+xIdNABTq33vZtVlMj5iatloKRzOSAsrDgOBmlRa5aYGJM/RamnXevGxzAX8ALG5O6tlAlfMsiAkf9E4B7awvAgMBAAECgYA73gw0HpHaMMn5AarlPxD/lxkvh4jV3lBjqXUeB2qWi2xvwy33p5D+g1NHrO8rvNQzOWaIfbBZALzRwr3lEiboZTNBoNokmHCa3iXQeeeLb/EiOklC33okMyOV5n3o5BcHGp9COR7iWv3zERVLUmforNtUAr6nNSG9ps0UMAXpYQJBAMgHK3zv2nXNEBwtLiVWyDzCHAnjVhA/qtCb+nYRzMgTvvwfrVSbwdP2sfRYSbJjqPvJ6mW+EVTXHZ29wLPF+4cCQQCw32HfEfby5/ASJMrxC8mlDxyybnWH/jVz0ykwhOGmKvioZfK6Bgev8qJIe2WaXaLRWiqxVwIJPcxuJvF1hgQZAkB+4WVpe6+EV84nQVVrI/Ah8jLc5tJ5vhj4+GfYKxRNuZDE1scYyzAY5vwcdUBSIrtW8852OSk/OrCzlWC96BDTAkBSbLdCai/IARhajDTa4iBlQEaiTGGPL4MfZ99BEhvKASqB54iW8ipw70R7PK4botk2cKuGm0KCpf73skRB/WM5AkBLY1BQfP/yfxcpHO46VIgtvBAPHmEYGgkUnPhkATFsSm6aqRAaxN/lMliVUJIO/Jv68kzp1DefTyE+1+g5KkWL'
class RSADecryptOrEncrypt {
	constructor (publicKey = PUBLICKKEY, privateKey = PRIVATEKEY) {
		this.publicKey = publicKey
		this.privateKey = privateKey
	}
	/**
	 * 公钥加密
	 */
	RSApublicEncrypt (params) {
		let encrypt = new JSEncrypt()
		encrypt.setPublicKey(this.publicKey)
		const encrypted = encrypt.encryptLong(encodeURIComponent(params))
		return encrypted
	}

	/**
	 * 私钥解密
	 */
	RSAprivateDecrypt (encrypted) {
		let decrypt = new JSEncrypt()
		decrypt.setPrivateKey(this.privateKey)
		const decrypted = decodeURIComponent(decrypt.decryptLong2(encrypted))
		return decrypted
	}
}

export default new RSADecryptOrEncrypt()
