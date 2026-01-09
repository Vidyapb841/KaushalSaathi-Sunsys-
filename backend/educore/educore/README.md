# Backend Setup – Django with PostgreSQL

This README explains **how PostgreSQL was installed and connected to the Django backend** for this project.

---

## 📌 Prerequisites

Make sure the following are installed on your system:

* Python (recommended: 3.10 or 3.11)
* pip (Python package manager)
* Django
* PostgreSQL
* pgAdmin 4

---

## 🐘 Installing PostgreSQL

1. Download PostgreSQL from the official website.
2. During installation:

   * Set a **password** for the `postgres` user
   * Default port: **5432**
3. pgAdmin 4 is installed along with PostgreSQL.

---

## 🔐 PostgreSQL Configuration (pgAdmin)

* **Host**: `localhost`
* **Port**: `5432`
* **Username**: `postgres`
* **Maintenance Database**: `postgres`

PostgreSQL service must be **running** before starting the backend.

---

## 📦 Installing Required Python Packages

Install Django and PostgreSQL adapter:

```
pip install django
pip install psycopg2-binary
```

---

## 🔗 Connecting PostgreSQL to Django

The database connection is configured in `settings.py` using the `DATABASES` setting.

### `settings.py` configuration

```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'postgres',
        'USER': 'postgres',
        'PASSWORD': '12345678',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

> ⚠️ Note: Credentials are hardcoded here for local development only.

---

## 🧩 Creating Models and Tables

1. Create Django models inside your app.
2. Add the app name to `INSTALLED_APPS` in `settings.py`.
3. Run migrations:

```
python manage.py makemigrations
python manage.py migrate
```

This creates tables in PostgreSQL.

---

## 🔍 Verifying Database Connection

### Check using Django shell

```
python manage.py shell
```

```
from django.db import connection
connection.vendor
```

Expected output:

```
'postgresql'
```

---

## 👀 Viewing Tables and Records in pgAdmin

Path in pgAdmin:

```
Servers → PostgreSQL → Databases → postgres
→ Schemas → public → Tables
```

* Right-click **Tables** → Refresh
* Right-click a table → **View/Edit Data → All Rows**

---

## ▶️ Running the Django Server

```
python manage.py runserver
```

Open browser:

```
http://127.0.0.1:8000/
```

---

## ✅ Summary

* PostgreSQL installed locally
* Connected to Django using `psycopg2-binary`
* Database configured in `settings.py`
* Tables created using migrations
* Data viewable in pgAdmin

---

## 🚀 Future Improvements

* Use environment variables (`.env`) for DB credentials
* Create separate databases for dev and prod
* Add database backups

---

**Backend successfully connected to PostgreSQL** ✅
