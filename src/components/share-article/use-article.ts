import { Articles } from "./articleBase";

export function useQuestion(id: string) {
    return Articles.find((s:any) => {
        return s.id === (id);
    })
  }