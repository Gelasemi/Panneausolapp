{project && (
  <div>
    <h2>📊 Analyse IA</h2>

    <p>Type: {project.result.classification.type}</p>

    <p>💰 Coût estimé: {project.result.prediction.cout_estime} €</p>
    <p>⏳ Durée: {project.result.prediction.duree_estimee_mois} mois</p>

    <h3>📍 PLU</h3>
    <p>{project.plu.zone}</p>

    <ul>
      {project.result.classification.workflow.map((s, i) => (
        <li key={i}>✔ {s}</li>
      ))}
    </ul>
  </div>
)}