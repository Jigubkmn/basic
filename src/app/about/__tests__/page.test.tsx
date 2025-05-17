// JestとReact Testing Libraryを使用して書いている。

/// <reference types="@testing-library/jest-dom" />
import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('About Page', () => {
  it('見出しを正しくレンダリングする', () => {
    render(<Home />);
    const heading = screen.getByText('Sum');
    expect(heading).toBeInTheDocument();
  });

  it('1 + 2 の正しい合計結果を表示します', () => {
    render(<Home />);
    const result = screen.getByText('3');
    expect(result).toBeInTheDocument();
  });

  it('合計計算を段落内に表示する', () => {
    render(<Home />);
    const paragraph = screen.getByText('3');
    expect(paragraph.tagName.toLowerCase()).toBe('p');
  });
});

// Jest部分
// describe, it (または test), expect
// テストの実行、アサーション（expect(...).toBeInTheDocument() のような検証）、モック機能などを担当します。



// React Testing Library (@testing-library/react)
// React コンポーネントをテストするためのユーティリティライブラリです。
// render: コンポーネントを DOM にレンダリングします。
// screen: レンダリングされた DOM にアクセスするための便利なクエリ（getByText など）を提供します。
// getByText, findByText, queryByText などのクエリ関数は、ユーザーがUIをどのように見たり操作したりするかに基づいて要素を見つけるのに役立ちます。
// toBeInTheDocument() のようなカスタムマッチャー (@testing-library/jest-dom から提供) は、Jest の expect を拡張して、DOM の状態をより宣言的にアサートできるようにします。