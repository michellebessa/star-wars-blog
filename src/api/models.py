from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'User'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(250), nullable=False)
    firstname = db.Column(db.String(250), nullable=False)
    lastname = db.Column(db.String(250), nullable=False)
    email = db.Column(db.String(250), nullable=False)


class Character(db.Model):
    __tablename__ = 'Character'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=True)
    height = db.Column(db.Integer, nullable=True)
    mass = db.Column(db.Integer, nullable=True)
    hair_color = db.Column(db.String(250), nullable=True)
    skin_color = db.Column(db.String(250), nullable=True)
    eye_color = db.Column(db.String(250), nullable=True)
    birth_year = db.Column(db.Integer, nullable=True)
    gender = db.Column(db.String(250), nullable=True)


class Planets(db.Model):
    __tablename__ = 'Planets'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=True)
    rotation_period = db.Column(db.Integer, nullable=True)
    orbital_period = db.Column(db.Integer, nullable=True)
    diameter = db.Column(db.Integer, nullable=True)
    climate = db.Column(db.String(250), nullable=True)
    gravity = db.Column(db.String(250), nullable=True)
    terrain = db.Column(db.String(250), nullable=True)
    surface_water = db.Column(db.Integer, nullable=True)
    population = db.Column(db.Integer, nullable=True)


class Vehicles(db.Model):
    __tablename__ = 'Vehicles'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=True)
    model = db.Column(db.String(250), nullable=True)
    manufacterer = db.Column(db.String(250), nullable=True)
    cost_in_credits = db.Column(db.Integer, nullable=True)
    length = db.Column(db.Integer, nullable=True)
    max_atmosphering_speed = db.Column(db.Integer, nullable=True)
    crew = db.Column(db.Integer, nullable=True)
    passengers = db.Column(db.Integer, nullable=True)
    cargo_capacity = db.Column(db.Integer, nullable=True)


class Favorites(db.Model):
    __tablename__ = 'Favorites'
    id = db.Column(db.Integer, primary_key=True)
    favorite_name = db.Column(db.String(250), nullable=False)
    user_id = db.Column(db.ForeignKey('User.id'))

    def to_dict(self):
        return {}
