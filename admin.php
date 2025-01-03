

<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yönetim Paneli</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
        }

        .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            width: 200px;
            height: 100%;
            background-color: #088178;
            color: white;
            display: flex;
            flex-direction: column;
            padding: 20px;
        }

        .sidebar h1 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        .sidebar a {
            color: white;
            text-decoration: none;
            margin: 10px 0;
            padding: 10px;
            border-radius: 5px;
            transition: background 0.3s;
        }

        .sidebar a:hover {
            background-color: #066d5c;
        }

        .main-content {
            margin-left: 250px;
            padding: 20px;
        }

        .header {
            background-color: #ecf0f1;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 5px;
        }

        .header h2 {
            margin: 0;
        }

        .card {
            background: white;
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .card h3 {
            margin: 0 0 10px 0;
        }

        .footer {
            text-align: center;
            margin-top: 20px;
            padding: 10px;
            color: #7f8c8d;
        }

        .hidden {
            display: none;
        }
    </style>
    <script>
        function showSection(sectionId) {
            const sections = document.querySelectorAll('.card');
            sections.forEach(section => section.classList.add('hidden'));
            document.getElementById(sectionId).classList.remove('hidden');

            // Store the current section in localStorage
            localStorage.setItem('currentSection', sectionId);
        }

        document.addEventListener('DOMContentLoaded', () => {
            // Retrieve the last visited section from localStorage
            const savedSection = localStorage.getItem('currentSection');

            // Default to showing the dashboard if no section is saved
            if (savedSection) {
                showSection(savedSection);
            } else {
                showSection('dashboard');
            }

            // Add click event listeners to sidebar links
            document.querySelectorAll('.sidebar a').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = link.getAttribute('href').substring(1);
                    showSection(target);
                });
            });

            // Prevent form submissions from refreshing the page
            document.querySelectorAll('form').forEach(form => {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    alert('İşlem başarıyla tamamlandı!');
                });
            });
        });
    </script>
</head>
<body>
    <div class="sidebar">
        <h1>Yönetim Paneli</h1>
        <a href="#dashboard">Gösterge Paneli</a>
        <a href="#add-product">Ürün Ekle</a>
        <a href="#remove-product">Ürün Sil</a>
    </div>

    <div class="main-content">
        <div class="header">
            <h2>Yönetim Paneline Hoş Geldiniz</h2>
        </div>

        <div id="dashboard" class="card">
            <h3>Gösterge Paneli</h3>
            <p>Sistemin mevcut durumunun genel görünümü.</p>
        </div>

        <div id="add-product" class="card hidden">
            <h3>Ürün Ekle</h3>
            <p>Yeni ürünleri envantere eklemek için bu bölümü kullanın.</p>
            <form>
                <label for="product-name">Ürün Adı:</label>
                <input type="text" id="product-name" name="product-name" required><br><br>

                <label for="product-category">Ürün Kategorisi:</label>
                <select id="product-category" name="product-category" required>
                    <option value="4-person">4 Kişilik</option>
                    <option value="6-person">6 Kişilik</option>
                    <option value="garden">Bahçe</option>
                </select><br><br>

                <label for="product-price">Ürün Fiyatı:</label>
                <input type="number" id="product-price" name="product-price" required><br><br>

                <label for="product-description">Ürün Açıklaması:</label>
                <textarea id="product-description" name="product-description" rows="4" cols="50" required></textarea><br><br>

                <label for="product-image">Ürün Görselleri:</label>
                <input type="file" id="product-image" name="product-image" accept="image/*" multiple><br><br>

                <button type="submit">Ürün Ekle</button>
            </form>
        </div>

        <div id="remove-product" class="card hidden">
            <h3>Ürün Sil</h3>
            <p>Mevcut ürünleri envanterden silmek için bu bölümü kullanın.</p>
            <form>
                <label for="product-id">Ürün ID:</label>
                <input type="text" id="product-id" name="product-id" required><br><br>
                <button type="submit">Ürün Sil</button>
            </form>
        </div>
    </div>

    
</body>
</html>
