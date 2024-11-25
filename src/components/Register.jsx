import { useState } from "react"

const years = ["2024", "2025", "2026", "2027", "2028", "2029", "2030"]
const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
const initialForm = {
	isimSoyisim: "gökhan",
	kartNumarasi: "123456123456123456",
	sonYil: "2026",
	sonAy: "Şubat",
	odemeTipi: "installment",
	onaylar: ["usage", "rights"]
}

/* 
TODO: bütün alanlara formData ile uyumlu name değerleri ekle.
TODO: bir eventHandler (onChange) yazıp, bütün alanlara bağlanacak
TODO: bir text, select ve checkbox alanları için gereken ifadelere göre doğru veriyi okuyarak, State'te sadece ilgili kısmı güncelle
TODO: tek bir fn ile bütün alanları kontrol et

 - text--> data nerede? value'da, state'teki karşılığı nerede? [name] 
 - select--> data nerede? value'da, state'teki karşılığı nerede? [name] 
 - radio--> data nerede? value'da, state'teki karşılığı nerede? [name] 
 - radio--> data nerede? (checked'de ve) value'da, state'teki karşılığı nerede? "onaylar" 
	eğer(onaylar'da ilgili value yoksa) o zaman onaylar'a ilgil value eklenecek
	varsa - filter ile çıkarılacak
	// https://dev.to/andyrewlee/cheat-sheet-for-updating-objects-and-arrays-in-react-state-48np

*/
function Register() {
	const [formData, setFormData] = useState(initialForm)
	return (
		<div>
			<h1>Register</h1>
			<form>
				<div className="input-group">
					<label htmlFor="nameSurname">İsim Soyisim</label>
					<input id="nameSurname" placeholder="İsim Soyisim" type="text" value={formData.isimSoyisim} />
				</div>
				<div className="input-group">
					<label htmlFor="creditnumber">Kart Numarası</label>
					<input id="creditnumber" placeholder="Kart Numarası" type="text" value={formData.kartNumarasi} />
				</div>
				<div className="input-group">
					<label htmlFor="exp_year">Son Kullanma Yıl</label>
					<select id="exp_year" defaultValue="-1" value={formData.sonYil}>
						<option value="-1" disabled>Yılı Seçiniz</option>
						{years.map((y) => {
							return <option key={y} value={y}>{y}</option>
						})}

					</select>

				</div>
				<div className="input-group">
					<label htmlFor="exp_mounth">Son Kullanma Ay</label>
					<select id="exp_mounth" defaultValue="-1" value={formData.sonAy}>
						<option value="-1" disabled >Ayı Seçiniz</option>
						{months.map((m) => {
							return <option key={m} value={m}>{m}</option>
						})}
					</select>
				</div>
				<div className="input-group flex column">
					<p>Taksit Sayısı</p>
					<div>
						<input id="paymentSinglle" checked={formData.odemeTipi.includes("single")} type="radio" name="odemeTipi" value="single" />
						<label htmlFor="paymentSinglle">Peşin</label>
					</div>
					<div>
						<input type="radio" id="paymentInstallments" checked={formData.odemeTipi.includes("installment")} name="odemeTipi" value="installment" />
						<label htmlFor="paymentInstallments">3 Taksit</label>
					</div>
				</div>
				<div className="input-group flex column">
					<div>
						<input id="kullanim" type="checkbox" checked={formData.onaylar.includes("usage")} name="condions_usage" value="usage" />
						<label htmlFor="kullanim">Verilerin kullanımı kabul ediyorum</label></div>
					<div>
						<input type="checkbox" checked={formData.onaylar.includes("rights")} id="satis" name="condions_rights" value="rights" />
						<label htmlFor="satis">Şatış yükümlülüklerini kabul ediyorum</label>
					</div>
					<div>
						<input type="checkbox" checked={formData.onaylar.includes("marketing")} id="pazarlama" name="condions_rights" value="marketing" />
						<label htmlFor="pazarlama">Pazarlama hükümlerini kabul ediyorum</label>
					</div>
				</div>
				<button className="primary-button" type="submit">Login</button>
			</form>
		</div>
	)
}

export default Register