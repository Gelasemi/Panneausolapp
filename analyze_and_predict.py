def global_analysis(data, text):

    complexity = 1
    if data["type"] == "Panneaux solaires":
        complexity = 2
    if data["surface"] and int(data["surface"]) > 150:
        complexity = 3

    prediction = predict(int(data["surface"]), complexity)

    return {
        "prediction": prediction,
        "risque": "moyen" if complexity > 1 else "faible"
    }