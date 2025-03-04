const { db } = require("../config/firebaseConfig");

const getModels = async (req, res) => {
  try {
    const modelsRef = db.collection("models");
    const snapshot = await modelsRef.get();
    const models = [];

    snapshot.forEach((doc) => {
      models.push({ id: doc.id, ...doc.data() });
    });

    res.json(models);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const uploadModel = async (req, res) => {
  try {
    const { name, description, url } = req.body;
    if (!name || !url) {
      return res.status(400).json({ error: "Name and URL are required" });
    }

    const newModel = {
      name,
      description: description || "",
      url,
      uploadDate: new Date().toISOString(),
    };

    const docRef = await db.collection("models").add(newModel);
    res.status(201).json({ id: docRef.id, ...newModel });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getModels, uploadModel };
