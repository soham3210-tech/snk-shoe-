// controllers/visitCountController.js
import VisitCount from "../Models/VisitCount.js";

export const getVisitCount = async (req, res) => {
  try {
    let visitCount = await VisitCount.findOne();
    if (!visitCount) {
      visitCount = new VisitCount();
    }
    res.json({ count: visitCount.count });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
/*
export const getVisitCount = async (req, res) => {}
    try
       find visitCount from VisitCount model

       if visitCount not found, create new VisitCount instance

       response with visitCount.count
    catch
       return 500 with message err.message






*/
export const incrementVisitCount = async (req, res) => {
  try {
    let visitCount = await VisitCount.findOne();
    if (!visitCount) {
      visitCount = new VisitCount();
    }
    visitCount.count++;
    await visitCount.save();
    res.json({ count: visitCount.count });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
/*
export const incrementVisitCount = async (req, res) => {}
    try
       find visitCount from VisitCount model

       if visitCount not found, create new VisitCount instance

       increment visitCount.count by 1

       save updated visitCount

       response with updated visitCount.count
    catch
       return 500 with message err.message




*/