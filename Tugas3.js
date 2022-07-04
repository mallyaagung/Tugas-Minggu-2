function belanja(harga, jumlah) {
    total = harga * jumlah;
    if (total <= 60000) {
        diskon = 0
        newTotal = total - diskon;
    } else {
        diskon = 35 / 100 * total;
        if (diskon >= 50000) {
            diskon = 50000
            newTotal = total - diskon
        } else {
            newTotal = total - diskon
        }

    }
    console.log(`Total Harga  : ${total}\nPotongan : ${diskon}\nSubTotal : ${newTotal}`)//perbaikan
}

belanja(60000, 4)