function displayDistricts() {
	const districtList = document.getElementById("district-list");

	const districtData = [
		"Klerksdorp",
		"Potchefstroom",
		"Mahikeng",
		"Rustenburg",
	];

	districtData.forEach((district) => {
		let card = `
            <div class="district-card">
                <div class="district-card-inner">
                    <div class="district-card-front">
                        <img src="https://picsum.photos/200" alt="Avatar" style="width:100%; height:100%;">
                    </div>
                    <div class="district-card-back">
                        <h3>${district}</h3>
                        <div class="card-content">
                          <p>Architect & Engineer</p>
                          <p>We love that guy</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

		districtList.innerHTML += card;
	});
}

displayDistricts();
