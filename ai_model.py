# ai_model.py
from sklearn.ensemble import RandomForestRegressor
import numpy as np

# dataset simplifié (à enrichir)
X = [
    [80, 1],   # surface, complexité
    [200, 3],
    [120, 2]
]

y_cost = [12000, 250000, 90000]
y_time = [5, 12, 8]  # mois

cost_model = RandomForestRegressor()
time_model = RandomForestRegressor()

cost_model.fit(X, y_cost)
time_model.fit(X, y_time)

def predict(surface, complexity):
    cost = cost_model.predict([[surface, complexity]])[0]
    time = time_model.predict([[surface, complexity]])[0]

    return {
        "cout_estime": int(cost),
        "duree_estimee_mois": int(time)
    }