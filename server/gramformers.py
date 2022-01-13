from happytransformer import HappyTextToText
from happytransformer import TTSettings
happy_tt = HappyTextToText("T5",  "prithivida/grammar_error_correcter_v1")
top_k_sampling_settings = TTSettings(do_sample=True, top_k=50, temperature=0.7, min_length=1, max_length=500)

def correct(sentence):
    text = "gec: " + sentence
    result = happy_tt.generate_text(text, args=top_k_sampling_settings)
    return result.text