import { useEffect, useState } from "react"

const years = ["2024", "2025", "2026", "2027", "2028", "2029", "2030"]
const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
const initialForm = {
	isimSoyisim: "",
	kartNumarasi: "",
	sonYil: "",
	sonAy: "",
	odemeTipi: null,
	onaylar: [], // birden fazla eş zamanlı seçim yaptırmak için
	kvkk: false
}



function Register() {
	const [formData, setFormData] = useState(initialForm);
	// TASK: "errors" state'i eklenecek ilk değeri boş bir obj
	const [errors, setErrors] = useState({})
	const [isValid, setValid] = useState(false);



	const handleChange = (event) => {
		// console.log("Event", event);
		const { name, value, checked, type } = event.target;

		// alan tipine göre formData statini günceller
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


		const newErrors = { ...errors };

		if (name === "isimSoyisim") {
			newErrors[name] = value.length < 3 ? "İsim Soyisim en az 3 karakter olmalı" : "";
		} else if (name === "kartNumarasi") {
			newErrors.kartNumarasi = value.length !== 16 ? "Kart numarası 16 haneli olmalı" : "";
		} else if (name === "sonYil") {
			newErrors.sonYil = value === "" ? "Yıl seçmelisiniz" : "";
		} else if (name === "sonAy") {
			newErrors.sonAy = value === "" ? "Ay seçmelisiniz" : "";
		} else if (name === "odemeTipi") {
			newErrors.odemeTipi = value === "" ? "Odeme tipi secmelisiniz" : "";
		} else if (name === "kvkk") {
			newErrors.kvkk = checked === false ? "KVKK onaylamalısınız" : "";
		}

		setErrors(newErrors)

	}


	// 
	useEffect(() => {
		if (formData.isimSoyisim.length < 3
			|| formData.kartNumarasi.length !== 16
			|| formData.sonYil === ""
			|| formData.sonAy === ""
			|| formData.odemeTipi === ""
			|| formData.kvkk === false
		) {
			setValid(false)
		} else {
			setValid(true)
		}
	}, [formData])

	return (
		<div>
			<h1>Register</h1>
			<form>
				<div className="input-group">
					<label htmlFor="nameSurname">İsim Soyisim</label>
					<input name="isimSoyisim"
						onChange={handleChange} id="nameSurname" placeholder="İsim Soyisim" type="text" value={formData.isimSoyisim} />
				</div>

				{errors.isimSoyisim && (
					<p className="error-message">hata {errors.isimSoyisim}</p>
				)}

				<div className="input-group">
					<label htmlFor="creditnumber">Kart Numarası</label>
					<input name="kartNumarasi" onChange={handleChange} id="creditnumber" placeholder="Kart Numarası" type="text" value={formData.kartNumarasi} />
				</div>

				{errors.kartNumarasi && (
					<p className="error-message">hata {errors.kartNumarasi}</p>
				)}


				<div className="input-group">
					<label htmlFor="exp_year">Son Kullanma Yıl</label>
					<select name="sonYil" onChange={handleChange} id="exp_year" defaultValue="" value={formData.sonYil}>
						<option value="" disabled>Yılı Seçiniz</option>
						{years.map((y) => {
							return <option key={y} value={y}>{y}</option>
						})}
					</select>
				</div>
				{errors.sonYıl && (
					<p className="error-message">hata {errors.sonYıl}</p>
				)}
				<div className="input-group">
					<label htmlFor="exp_mounth">Son Kullanma Ay</label>
					<select name="sonAy" onChange={handleChange} id="exp_mounth" defaultValue="" value={formData.sonAy}>
						<option value="" disabled >Ayı Seçiniz</option>
						{months.map((m) => {
							return <option key={m} value={m}>{m}</option>
						})}
					</select>
				</div>
				{errors.sonAy && (
					<p className="error-message">hata {errors.sonAy}</p>
				)}
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
				{errors.odemeTipi && (
					<p className="error-message">hata {errors.odemeTipi}</p>
				)}
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
				<div className="input-group flex column">
					<h3>KVKK Hükümlerini Okudum Onaylıyorum</h3>
					<div>
						<input id="kullanim" type="checkbox" checked={formData.kvkk} name="kvkk" onChange={handleChange} />
						<label htmlFor="kullanim">Verilerin kullanımı kabul ediyorum</label></div>
				</div>
				{errors.kvkk && (
					<p className="error-message">hata {errors.kvkk}</p>)}
				<button disabled={!isValid} className="primary-button" type="submit">Login</button>
			</form>
		</div>
	)
}

export default Register