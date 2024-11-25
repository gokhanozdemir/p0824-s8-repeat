

const years = ["2024", "2025", "2026", "2027", "2028", "2029", "2030"]
const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
function Register() {
	return (
		<div>
			<h1>Register</h1>
			{/* 
			<div className="input-group">
				<label htmlFor="emailormobile">Email or mobile number</label>
				
				<input onChange={handleChange} name="userInfo" value={formData.userInfo} type="text" id="emailormobile" placeholder="your user info" />
			</div>
			*/}
			<form>
				<div className="input-group">
					<label htmlFor="nameSurname">İsim Soyisim</label>
					<input id="nameSurname" placeholder="İsim Soyisim" type="text" />
				</div>
				<div className="input-group">
					<label htmlFor="creditnumber">Kart Numarası</label>
					<input id="creditnumber" placeholder="Kart Numarası" type="text" />
				</div>
				<div className="input-group">
					<label htmlFor="exp_year">Son Kullanma Yıl</label>
					<select id="exp_year" defaultValue="-1">
						<option value="-1" disabled>Yılı Seçiniz</option>
						{years.map((y) => {
							return <option key={y} value={y}>{y}</option>
						})}

					</select>

				</div>
				<div className="input-group">
					<label htmlFor="exp_mounth">Son Kullanma Ay</label>
					<select id="exp_mounth" defaultValue="-1">
						<option value="-1" disabled >Ayı Seçiniz</option>
						{months.map((y) => {
							return <option key={y} value={y}>{y}</option>
						})}
					</select>

				</div>
			</form>
		</div>
	)
}

export default Register