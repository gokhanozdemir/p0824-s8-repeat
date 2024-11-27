import { useState } from "react"

const years = ["2024", "2025", "2026", "2027", "2028", "2029", "2030"]
const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
const initialForm = {
	isimSoyisim: "gökhan",
	kartNumarasi: "123456123456123456",
	sonYil: "2026",
	sonAy: "Şubat",
	odemeTipi: "installment",
	// birden fazla eş zamanlı seçim yaptırmak için
	onaylar: ["marketing"],
	kvkk: true
}


function Register() {
	const [formData, setFormData] = useState(initialForm);
	const handleChange = (event) => {
		// console.log("Event", event);
		const { name, value, checked, type } = event.target;

		if (name === "approvals") {
			const updatedOnaylar = checked === true
				? [...formData.onaylar, value]
				// Checkbox işaretlenmişse ekle
				: formData.onaylar.filter((item) => item !== value); // İşaret kaldırılmışsa çıkar
			setFormData({ ...formData, onaylar: updatedOnaylar });

		} else {
			const newFormData = {
				...formData, [name]: type === "checkbox" ? checked : value
			}
			setFormData(newFormData)
		}


	}
	return (
		<div>
			<h1>Register</h1>
			<form>
				<div className="input-group">
					<label htmlFor="nameSurname">İsim Soyisim</label>
					<input name="isimSoyisim"
						onChange={handleChange} id="nameSurname" placeholder="İsim Soyisim" type="text" value={formData.isimSoyisim} />
				</div>
				<div className="input-group">
					<label htmlFor="creditnumber">Kart Numarası</label>
					<input name="kartNumarasi" onChange={handleChange} id="creditnumber" placeholder="Kart Numarası" type="text" value={formData.kartNumarasi} />
				</div>
				<div className="input-group">
					<label htmlFor="exp_year">Son Kullanma Yıl</label>
					<select name="sonYil" onChange={handleChange} id="exp_year" defaultValue="-1" value={formData.sonYil}>
						<option value="-1" disabled>Yılı Seçiniz</option>
						{years.map((y) => {
							return <option key={y} value={y}>{y}</option>
						})}
					</select>

				</div>
				<div className="input-group">
					<label htmlFor="exp_mounth">Son Kullanma Ay</label>
					<select name="sonAy" onChange={handleChange} id="exp_mounth" defaultValue="-1" value={formData.sonAy}>
						<option value="-1" disabled >Ayı Seçiniz</option>
						{months.map((m) => {
							return <option key={m} value={m}>{m}</option>
						})}
					</select>
				</div>
				<div className="input-group flex column">
					<p>Taksit Sayısı</p>
					<div>
						<input type="radio" name="odemeTipi" id="paymentSinglle" onChange={handleChange} checked={formData.odemeTipi === ("single")} value="single" />
						<label htmlFor="paymentSinglle">Peşin</label>
					</div>
					<div>
						<input type="radio" name="odemeTipi" onChange={handleChange} id="paymentInstallments" checked={formData.odemeTipi === ("installment")} value="installment" />
						<label htmlFor="paymentInstallments">3 Taksit</label>
					</div>
				</div>
				<div className="input-group flex column">
					<h3>İsteğe Bağlı Onaylar</h3>
					<div>
						<input type="checkbox" checked={formData.onaylar.includes("rights")} id="satis" name="approvals" onChange={handleChange} value="rights" />
						<label htmlFor="satis">Şatış yükümlülüklerini kabul ediyorum</label>
					</div>
					<div>
						<input type="checkbox" checked={formData.onaylar.includes("marketing")} id="pazarlama" name="approvals" onChange={handleChange} value="marketing" />
						<label htmlFor="pazarlama">Pazarlama hükümlerini kabul ediyorum</label>
					</div>
					<div>
						<input type="checkbox" checked={formData.onaylar.includes("stats")} id="istatistik" name="approvals" onChange={handleChange} value="stats" />
						<label htmlFor="istatistik">İstatisiki kullanım hükümlerini kabul ediyorum</label>
					</div>
				</div>
				<div>
					<h3>KVKK Hükümlerini Okudum Onaylıyorum</h3>
					<div>
						<input id="kullanim" type="checkbox" checked={formData.kvkk} name="kvkk" onChange={handleChange} />
						<label htmlFor="kullanim">Verilerin kullanımı kabul ediyorum</label></div>
				</div>
				<button disabled={!formData.kvkk} className="primary-button" type="submit">Login</button>
			</form>
		</div>
	)
}

export default Register