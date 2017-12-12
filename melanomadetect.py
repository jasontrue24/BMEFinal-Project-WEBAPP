from get_prediction import get_prediction




class Meldetect
    """
    Find cancer from melanoma image
    
    """
    def __init__(self, imagefile):
        self.image = imagefile
        self.label = []
        self.result = []
        (self.labels, self.result) = get_prediction(imagefile)
        