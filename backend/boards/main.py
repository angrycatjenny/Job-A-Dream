# coding=utf-8
from konlpy.tag import Komoran
from random import sample
# No_nouns = ['을', '를', '에', '의', '로', '고', '은', '는']

def question_generator(text):
    komo = Komoran()

    Text = text
    question = []
    for value, tag in set(komo.pos(Text)):
        if tag == 'NNP' and value != '제가' and '!' not in value:
            question.append('왜 '+ value+ '인가요?')
            question.append(value + '에 대해서 설명해주세요.')
            question.append(value + '의 장단점이 무엇이라고 생각하시나요?')
            question.append(value + '에 대해 영어로 묘사해주세요.')
    # print(sample(question, 3))
    return sample(question, 3) if len(question) >= 3 else []