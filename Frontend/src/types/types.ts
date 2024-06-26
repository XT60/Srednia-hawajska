export enum PageType {
    QUIZ_TYPE_SELECTION = "quiz_type_selection",
    QUIZ_SELECTION = "quiz_selection",
    QUIZ = "quiz",
    RESULTS = "results",
}

export type CodeSmell = {
    linebegin: number;
    lineend: number;
    category: string;
};

export type QuizData = {
    id: string;
    type: string;
    language: string;
    categories: string[];
    codesmell: CodeSmell[];
};

export type CheckQuizResult = {
    correct: CodeSmell[];
    missed: CodeSmell[];
    extra: CodeSmell[];
    misclassified: CodeSmell[];
};

export interface CodeSmellData {
    categories: string[];
    codeSmells: { linebegin: number; lineend: number; category: string }[];
}
